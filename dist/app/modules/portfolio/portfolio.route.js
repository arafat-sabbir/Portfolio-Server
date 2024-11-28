"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const portfolio_controller_1 = require("./portfolio.controller");
const multer_1 = require("../../utils/multer");
const convertFilePath_1 = __importDefault(require("../../utils/convertFilePath"));
// Initialize router
const router = (0, express_1.Router)();
router.post('', multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { thumbnail: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, 
//   validateRequest(portfolioValidation.createPortfolioSchema),
portfolio_controller_1.portfolioControllers.createPortfolio);
router.get('', portfolio_controller_1.portfolioControllers.getAllPortfolio);
router.get('/:id', portfolio_controller_1.portfolioControllers.getSinglePortfolio);
router.delete('/:id', portfolio_controller_1.portfolioControllers.deletePortfolio);
router.patch('/:id', multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { thumbnail: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, 
//   validateRequest(portfolioValidation.editPortfolioSchema),
portfolio_controller_1.portfolioControllers.updatePortfolio);
const portfolioRoutes = router;
exports.default = portfolioRoutes;
