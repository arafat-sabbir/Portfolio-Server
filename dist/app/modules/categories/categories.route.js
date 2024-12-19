"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const categories_controller_1 = require("./categories.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const categories_validation_1 = require("./categories.validation");
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(categories_validation_1.categoriesValidation.createCategoriesSchema), categories_controller_1.categoriesControllers.createPortfolioCategories);
router.get('/', categories_controller_1.categoriesControllers.getAllPortfolioCategories);
router.get('/:id', categories_controller_1.categoriesControllers.getSinglePortfolioCategories);
router.delete('/:name', categories_controller_1.categoriesControllers.deletePortfolioCategories);
router.post('/blogs', (0, validateRequest_1.default)(categories_validation_1.categoriesValidation.createCategoriesSchema), categories_controller_1.categoriesControllers.createPortfolioCategories);
router.get('/blog', categories_controller_1.categoriesControllers.getAllPortfolioCategories);
router.get('/blgos/:id', categories_controller_1.categoriesControllers.getSinglePortfolioCategories);
router.delete('/blgos/:name', categories_controller_1.categoriesControllers.deletePortfolioCategories);
const categoriesRoutes = router;
exports.default = categoriesRoutes;
