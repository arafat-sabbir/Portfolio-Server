"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const multer_1 = require("../../utils/multer");
const convertFilePath_1 = __importDefault(require("../../utils/convertFilePath"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
// Initialize router
const router = (0, express_1.Router)();
router.post('', (0, auth_1.default)(), multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { photo: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, (0, validateRequest_1.default)(blog_validation_1.blogValidation.createBlogSchema), blog_controller_1.blogControllers.createBlog);
router.get('', blog_controller_1.blogControllers.getAllBlog);
router.get('/:id', blog_controller_1.blogControllers.getSingleBlog);
router.patch('/:id', multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { photo: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, (0, auth_1.default)(), blog_controller_1.blogControllers.editBlog);
router.delete('/:id', (0, auth_1.default)(), blog_controller_1.blogControllers.deleteBlog);
const blogRoutes = router;
exports.default = blogRoutes;
