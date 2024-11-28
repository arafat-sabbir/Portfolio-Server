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
exports.categoriesServices = void 0;
// Import the model
const categories_model_1 = __importDefault(require("./categories.model"));
// Service function to create a new categories.
const createCategories = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if a category exists in the database
    const portfolioCategoriesExist = yield categories_model_1.default.findOne();
    if (portfolioCategoriesExist) {
        // Update the existing document to include the new category
        yield categories_model_1.default.updateOne({ _id: portfolioCategoriesExist._id }, // Locate the document
        { $addToSet: { portfolioCategories: data.category } } // Avoid duplicates using $addToSet
        );
        return portfolioCategoriesExist; // Return the updated existing document
    }
    else {
        // Create a new document with the category
        const newCategories = yield categories_model_1.default.create({
            portfolioCategories: [data.category],
        });
        return newCategories; // Return the newly created document
    }
});
// Service function to retrieve a single categories by ID.
const getCategoriesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.default.findById(id);
});
// Service function to retrieve multiple categories based on query parameters.
const getAllCategories = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield categories_model_1.default.findOne(query);
});
exports.categoriesServices = {
    createCategories,
    getCategoriesById,
    getAllCategories,
};
