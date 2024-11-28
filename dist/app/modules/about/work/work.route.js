"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const work_controller_1 = require("./work.controller");
const work_validation_1 = require("./work.validation");
const uploadSinglePhoto_1 = __importDefault(require("../../../utils/uploadSinglePhoto"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../../middlewares/auth"));
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, uploadSinglePhoto_1.default)(), (0, validateRequest_1.default)(work_validation_1.workValidation.createWorkSchema), work_controller_1.workControllers.createWork);
router.get('/', work_controller_1.workControllers.getAllWork);
router.get('/:id', work_controller_1.workControllers.getSingleWork);
router.patch('/:id', (0, uploadSinglePhoto_1.default)(), (0, validateRequest_1.default)(work_validation_1.workValidation.editWorkSchema), work_controller_1.workControllers.editWork);
router.delete('/:id', (0, auth_1.default)(), work_controller_1.workControllers.deleteWork);
const workRoutes = router;
exports.default = workRoutes;
