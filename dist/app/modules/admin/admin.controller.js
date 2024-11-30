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
exports.adminControllers = void 0;
const admin_service_1 = require("./admin.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single User.
const createAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.createAdmin(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: result.message,
        data: result,
    });
}));
// Controller function to handle Login
const loginAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.loginAdmin(req.body);
    // Send a success response with the created resource data
    res.cookie('accessToken', result.token, {
        httpOnly: false,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: false,
    });
    (0, sendResponse_1.default)(res, {
        message: 'Log In Successful',
        data: result,
    });
}));
const verifyOtp = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.verifyOtp(req.body.otp);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'Otp Verified Successfully',
        data: result,
    });
}));
const sendForgotPasswordEmail = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.sendForgotPasswordEmail(req.body.email);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: result.message,
        data: result,
    });
}));
const forgotPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, otp } = req.body;
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.forgotPassword({ email, password, otp });
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: result.message,
        data: result,
    });
}));
const verifyForgotPassword = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp } = req.body;
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.verifyForgotOtp({ email, otp });
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: result.message,
        data: result,
    });
}));
const getAdmin = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield admin_service_1.adminServices.getAdmin();
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'Admin Retrieved Successfully',
        data: result,
    });
}));
exports.adminControllers = {
    createAdmin,
    loginAdmin,
    verifyOtp,
    sendForgotPasswordEmail,
    forgotPassword,
    verifyForgotPassword,
    getAdmin,
};
