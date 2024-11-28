"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const auth_1 = __importDefault(require("../../../middlewares/auth"));
const multer_1 = require("../../../utils/multer");
const convertFilePath_1 = __importDefault(require("../../../utils/convertFilePath"));
// Import controller from corresponding module
//Import validation from corresponding module
// Initialize router
const router = (0, express_1.Router)();
// Register A New User
router.get('/me', user_controller_1.userControllers.getUser);
router.patch('/update', (0, auth_1.default)(), multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { photo: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, (0, validateRequest_1.default)(user_validation_1.userValidation.updateUserSchema), user_controller_1.userControllers.updateUser);
const userRoutes = router;
exports.default = userRoutes;
