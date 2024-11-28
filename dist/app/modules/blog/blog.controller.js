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
exports.blogControllers = void 0;
const blog_service_1 = require("./blog.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
// Controller function to handle the creation of a single Blog.
const createBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new blog and get the result
    const result = yield blog_service_1.blogServices.createBlog(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Blog created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single blog by ID.
const getSingleBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the blog by ID and get the result
    const result = yield blog_service_1.blogServices.getBlogById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Blog Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple blog.
const getAllBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple blog based on query parameters and get the result
    const result = yield blog_service_1.blogServices.getAllBlog(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Blogs Retrieved Successfully',
        data: result,
    });
}));
const editBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the blog by ID and get the result
    const result = yield blog_service_1.blogServices.editBlog(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Blog Updated Successfully',
        data: result,
    });
}));
const deleteBlog = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the blog by ID and get the result
    const result = yield blog_service_1.blogServices.deleteBlog(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Blog Deleted Successfully',
        data: result,
    });
}));
exports.blogControllers = {
    createBlog,
    getSingleBlog,
    getAllBlog,
    editBlog,
    deleteBlog,
};
