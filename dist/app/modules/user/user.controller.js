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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single User.
const createUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield user_service_1.userServices.createUser(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New user Added Successfully',
        data: result,
    });
}));
// Controller function to handle Login
const loginUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new user and get the result
    const result = yield user_service_1.userServices.loginUser(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'Log In Successful',
        data: result,
    });
}));
const getUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple user based on query parameters and get the result
    const result = yield user_service_1.userServices.getUser();
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Users Retrieved Successfully',
        data: result,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to update the user by ID and get the result
    const result = yield user_service_1.userServices.updateUser(req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Admin Updated Successfully',
        data: result,
    });
}));
exports.userControllers = {
    createUser,
    getUser,
    loginUser,
    updateUser
};
