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
exports.blogServices = void 0;
// Import the model
const deleteImage_1 = __importDefault(require("../../utils/deleteImage"));
const blog_model_1 = __importDefault(require("./blog.model"));
// Service function to create a new blog.
const createBlog = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newBlog = yield blog_model_1.default.create(data);
    return newBlog;
});
// Service function to retrieve a single blog by ID.
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.default.findById(id);
});
// Service function to retrieve All Blogs
const getAllBlog = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.default.find(query);
});
// // Service function to retrieve multiple blog based on query parameters.
const editBlog = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Initialize updatedData as an empty object
    let updatedData = {};
    Object.keys(payload).forEach((key) => {
        // Ensure key is of type keyof TBlog and payload[key] is not undefined
        const typedKey = key;
        if (payload[typedKey] !== undefined) {
            updatedData = Object.assign(Object.assign({}, updatedData), { [typedKey]: payload[typedKey] });
        }
    });
    // Find and update the blog by ID
    const updatedBlog = yield blog_model_1.default.findByIdAndUpdate(id, updatedData, {
        new: true,
    });
    return updatedBlog;
});
const deleteBlog = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.default.findById(id);
    if (!blog) {
        throw new Error('Blog not found');
    }
    // Extract the image paths from the product data
    const thumbnailPath = blog === null || blog === void 0 ? void 0 : blog.photo;
    if (thumbnailPath) {
        (0, deleteImage_1.default)(thumbnailPath);
    }
    return yield blog_model_1.default.findByIdAndDelete(id);
});
exports.blogServices = {
    createBlog,
    getBlogById,
    getAllBlog,
    editBlog,
    deleteBlog,
};
