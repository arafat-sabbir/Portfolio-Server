"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const admin_controller_1 = require("./admin.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_validation_1 = require("./admin.validation");
// Initialize router
const router = (0, express_1.Router)();
router.post('/register', (0, validateRequest_1.default)(admin_validation_1.adminValidation.createAdminSchema), admin_controller_1.adminControllers.createAdmin);
//Login User
router.post('/login', (0, validateRequest_1.default)(admin_validation_1.adminValidation.createAdminSchema), admin_controller_1.adminControllers.loginAdmin);
router.patch('/verify-opt', (0, validateRequest_1.default)(admin_validation_1.adminValidation.verifyOtpSchema), admin_controller_1.adminControllers.verifyOtp);
router.patch('/send-forgot-email', (0, validateRequest_1.default)(admin_validation_1.adminValidation.forgotPasswordEmailSchema), admin_controller_1.adminControllers.sendForgotPasswordEmail);
router.patch('/forgot-password', (0, validateRequest_1.default)(admin_validation_1.adminValidation.forgotPasswordSchema), admin_controller_1.adminControllers.forgotPassword);
router.patch('/verify-forgot-otp', (0, validateRequest_1.default)(admin_validation_1.adminValidation.verifyForgotOtp), admin_controller_1.adminControllers.verifyForgotPassword);
router.get('/me', admin_controller_1.adminControllers.getAdmin);
const adminRoutes = router;
exports.default = adminRoutes;
