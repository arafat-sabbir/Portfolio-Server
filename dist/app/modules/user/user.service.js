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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the model
const config_1 = __importDefault(require("../../config"));
const deleteImage_1 = __importDefault(require("../../utils/deleteImage"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const hashInfo_1 = require("../../utils/hashInfo");
const user_model_1 = __importDefault(require("./user.model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Service function to create a new user.
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = payload, data = __rest(payload, ["password"]);
    const existingUser = yield user_model_1.default.findOne();
    if (existingUser)
        throw new Error('Admin Already Exists');
    const hashedPassword = yield (0, hashInfo_1.hashInfo)(password);
    const newUser = yield user_model_1.default.create(Object.assign({ password: hashedPassword }, data));
    return newUser;
});
// Service function to Login User And Return A Token
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: payload.email });
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = bcrypt_1.default.compareSync(payload.password, user.password);
    if (!isMatch) {
        throw new Error('Incorrect Password Try Again');
    }
    const token = yield (0, generateToken_1.default)({ id: user._id, role: 'admin' }, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires);
    return { token };
});
// Service function to retrieve a single user by ID.
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne();
});
const updateUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = payload, data = __rest(payload, ["password", "email"]);
    let updatedData = {};
    Object.keys(data).forEach((key) => {
        const typedKey = key;
        if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
            updatedData = Object.assign(Object.assign({}, updatedData), { [typedKey]: data[typedKey] });
        }
    });
    const user = yield user_model_1.default.findOne();
    if (!user) {
        throw new Error('No Admin found');
    }
    // If a photo exists, delete it
    if (user.photo) {
        (0, deleteImage_1.default)(user.photo);
    }
    // Spread `updatedData` so the fields are updated correctly
    const updatedUser = yield user_model_1.default.findOneAndUpdate({}, updatedData, { new: true });
    return updatedUser;
});
// Service function to retrieve multiple user based on query parameters.
exports.userServices = {
    createUser,
    getUser,
    loginUser,
    updateUser,
};
