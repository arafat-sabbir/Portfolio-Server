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
exports.portfolioServices = void 0;
// Import the model
const deleteImage_1 = __importDefault(require("../../utils/deleteImage"));
const portfolio_model_1 = __importDefault(require("./portfolio.model"));
// Service function to create a new portfolio.
const createPortfolio = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newPortfolio = yield portfolio_model_1.default.create(data);
    return newPortfolio;
});
// Service function to retrieve a single portfolio by ID.
const getPortfolioById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield portfolio_model_1.default.findById(id);
});
// Service function to retrieve multiple portfolio based on query parameters.
const getAllPortfolio = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield portfolio_model_1.default.find(query);
});
const deletePortfolio = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolio = yield portfolio_model_1.default.findById(id);
    if (!portfolio) {
        throw new Error('Portfolio not found');
    }
    const thumbnail = portfolio === null || portfolio === void 0 ? void 0 : portfolio.thumbnail;
    if (thumbnail) {
        (0, deleteImage_1.default)(thumbnail);
    }
    return yield portfolio_model_1.default.findByIdAndDelete(id);
});
const updatePortfolio = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const portfolio = yield portfolio_model_1.default.findById(id);
    if (!portfolio) {
        throw new Error('Portfolio not found');
    }
    if (payload.thumbnail) {
        (0, deleteImage_1.default)(portfolio.thumbnail);
    }
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
    const updatedPortfolio = yield portfolio_model_1.default.findByIdAndUpdate(id, updatedData, {
        new: true,
    });
    return updatedPortfolio;
});
exports.portfolioServices = {
    createPortfolio,
    getPortfolioById,
    getAllPortfolio,
    deletePortfolio,
    updatePortfolio,
};
