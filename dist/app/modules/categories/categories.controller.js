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
exports.categoriesControllers = void 0;
const categories_service_1 = require("./categories.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single Categories.
const createPortfolioCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new categories and get the result
    const result = yield categories_service_1.categoriesServices.createPortfolioCategories(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Categories created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single categories by ID.
const getSinglePortfolioCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the categories by ID and get the result
    const result = yield categories_service_1.categoriesServices.getPortfolioCategoriesById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Categories Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple categories.
const getAllPortfolioCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple categories based on query parameters and get the result
    const result = yield categories_service_1.categoriesServices.getAllPortfolioCategories(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Categoriess Retrieved Successfully',
        data: result,
    });
}));
const deletePortfolioCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to delete the categories by ID and get the result
    const result = yield categories_service_1.categoriesServices.deletePortfolioCategory(req.params.name);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Categories Deleted Successfully',
        data: result,
    });
}));
// Controller function to handle the creation of a single Categories.
const createBlogCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new categories and get the result
    const result = yield categories_service_1.categoriesServices.createPortfolioCategories(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Categories created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single categories by ID.
const getSingleBlogCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the categories by ID and get the result
    const result = yield categories_service_1.categoriesServices.getPortfolioCategoriesById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Categories Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple categories.
const getAllBlogCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple categories based on query parameters and get the result
    const result = yield categories_service_1.categoriesServices.getAllPortfolioCategories(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Categoriess Retrieved Successfully',
        data: result,
    });
}));
const deleteBlogCategories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to delete the categories by ID and get the result
    const result = yield categories_service_1.categoriesServices.deletePortfolioCategory(req.params.name);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Categories Deleted Successfully',
        data: result,
    });
}));
exports.categoriesControllers = {
    createPortfolioCategories,
    getSinglePortfolioCategories,
    getAllPortfolioCategories,
    deletePortfolioCategories,
    getAllBlogCategories,
    deleteBlogCategories,
    getSingleBlogCategories,
    createBlogCategories,
};
