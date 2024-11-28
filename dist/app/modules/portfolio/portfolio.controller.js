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
exports.portfolioControllers = void 0;
const portfolio_service_1 = require("./portfolio.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single Portfolio.
const createPortfolio = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new portfolio and get the result
    const result = yield portfolio_service_1.portfolioServices.createPortfolio(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Portfolio created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single portfolio by ID.
const getSinglePortfolio = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the portfolio by ID and get the result
    const result = yield portfolio_service_1.portfolioServices.getPortfolioById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Portfolio Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple portfolio.
const getAllPortfolio = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple portfolio based on query parameters and get the result
    const result = yield portfolio_service_1.portfolioServices.getAllPortfolio(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Portfolios Retrieved Successfully',
        data: result,
    });
}));
const deletePortfolio = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the portfolio by ID and get the result
    const result = yield portfolio_service_1.portfolioServices.deletePortfolio(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Portfolio Deleted Successfully',
        data: result,
    });
}));
const updatePortfolio = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the portfolio by ID and get the result
    const result = yield portfolio_service_1.portfolioServices.updatePortfolio(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Portfolio Updated Successfully',
        data: result,
    });
}));
exports.portfolioControllers = {
    createPortfolio,
    getSinglePortfolio,
    getAllPortfolio,
    deletePortfolio,
    updatePortfolio,
};
