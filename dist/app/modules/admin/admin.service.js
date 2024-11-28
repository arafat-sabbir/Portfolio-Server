"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the model
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const sendOtp_1 = __importDefault(require("../../utils/sendOtp"));
const admin_model_1 = __importDefault(require("./admin.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Service function to create a new user.
const createAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield admin_model_1.default.startSession(); // Start a session
    session.startTransaction(); // Start the transaction
    try {
        // Check if an admin already exists
        const existingUser = yield admin_model_1.default.findOne().session(session);
        if (existingUser === null || existingUser === void 0 ? void 0 : existingUser.isVerified)
            throw new Error('Admin Already Exists');
        if ((existingUser === null || existingUser === void 0 ? void 0 : existingUser.email) != payload.email)
            yield admin_model_1.default.findOneAndDelete({ email: existingUser === null || existingUser === void 0 ? void 0 : existingUser.email }, { session });
        // Generate a random 6-digit OTP
        const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
        const otp = generateOtp();
        // Send the OTP via email
        const sentOtp = yield (0, sendOtp_1.default)({ email: payload.email, otp });
        if (!sentOtp)
            throw new Error('Failed to send OTP');
        const hashedOtp = bcrypt_1.default.hashSync(String(otp), 10);
        // Save the OTP to the database
        if (existingUser) {
            yield admin_model_1.default.findOneAndUpdate({ email: payload.email }, { otp: hashedOtp }, { new: true, session });
        }
        else {
            yield admin_model_1.default.create([Object.assign(Object.assign({}, payload), { otp: hashedOtp })], { session });
        }
        // Create the new admin
        // Commit the transaction
        yield session.commitTransaction();
        session.endSession();
        return { message: 'Otp Sent Successfully' };
    }
    catch (error) {
        // Rollback the transaction in case of an error
        yield session.abortTransaction();
        session.endSession();
        console.error('Transaction failed:', error);
        throw new Error(error.message || 'Failed to create admin');
    }
});
// Service function to Login User And Return A Token
const loginAdmin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield admin_model_1.default.findOne({ email: payload.email });
    if (!user) {
        throw new Error('Invalid Email Address Try Again');
    }
    if (!user.isVerified) {
        throw new Error('Admin is not verified');
    }
    const isMatch = bcrypt_1.default.compareSync(payload.password, user.password);
    if (!isMatch) {
        throw new Error('Incorrect Password Try Again');
    }
    const token = yield (0, generateToken_1.default)({ id: user._id, role: 'admin' }, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires);
    return { token };
});
const verifyOtp = (otp) => __awaiter(void 0, void 0, void 0, function* () {
    const otpExist = yield admin_model_1.default.findOne();
    if (!otpExist) {
        throw new Error('No Admin Exist');
    }
    console.log(otp, otpExist.otp);
    const matchOtp = bcrypt_1.default.compareSync(otp, otpExist.otp);
    if (!matchOtp) {
        throw new Error('Incorrect Otp Provided');
    }
    else {
        const updateAdmin = admin_model_1.default.findOneAndUpdate({}, { otp: null, isVerified: true }, { new: true });
        return updateAdmin;
    }
});
const sendForgotPasswordEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield admin_model_1.default.findOne({ email: email });
    if (!user) {
        throw new Error('User not found');
    }
    // Generate a random 6-digit OTP
    const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
    const otp = generateOtp();
    // Send the OTP via email
    const sentOtp = yield (0, sendOtp_1.default)({ email, otp });
    if (!sentOtp)
        throw new Error('Failed to send OTP');
    const hashedOtp = bcrypt_1.default.hashSync(String(otp), 10);
    yield admin_model_1.default.findOneAndUpdate({ email: email }, { forgotOtp: hashedOtp }, { new: true });
    return { message: 'Otp Sent Successfully' };
});
const forgotPassword = (_a) => __awaiter(void 0, [_a], void 0, function* ({ otp, email, password, }) {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const admin = yield admin_model_1.default.findOne({ email });
        if (!admin) {
            throw new Error('Admin not found');
        }
        if (!admin.forgotOtp) {
            throw new Error('No Otp Found');
        }
        const matchOtp = bcrypt_1.default.compareSync(otp, admin.forgotOtp);
        if (!matchOtp) {
            throw new Error('Incorrect Otp Provided');
        }
        else {
            yield admin_model_1.default.findOneAndUpdate({ email }, { password: bcrypt_1.default.hashSync(password, 10), forgotOtp: null }, { new: true, session });
        }
        yield session.commitTransaction();
        session.endSession();
        return { message: 'Password Updated Successfully' };
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw error;
    }
});
const verifyForgotOtp = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, otp }) {
    const admin = yield admin_model_1.default.findOne({ email });
    if (!admin) {
        throw new Error('Admin not found');
    }
    if (!admin.forgotOtp) {
        throw new Error('No Otp Found');
    }
    const matchOtp = bcrypt_1.default.compareSync(otp, admin.forgotOtp);
    if (!matchOtp) {
        throw new Error('Incorrect Otp Provided');
    }
    return { message: 'Otp Verified Successfully' };
});
const getAdmin = () => __awaiter(void 0, void 0, void 0, function* () {
    const admin = yield admin_model_1.default.findOne();
    return admin;
});
// Generate a random 6-digit OTP
exports.adminServices = {
    createAdmin,
    loginAdmin,
    verifyOtp,
    sendForgotPasswordEmail,
    forgotPassword,
    verifyForgotOtp,
    getAdmin,
};
