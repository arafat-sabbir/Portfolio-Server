"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const experience_controller_1 = require("./experience.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const experience_validation_1 = require("./experience.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(), (0, validateRequest_1.default)(experience_validation_1.experienceValidation.createExperienceSchema, true), experience_controller_1.experienceControllers.createExperience);
router.get('/:id', experience_controller_1.experienceControllers.getSingleExperience);
router.get('/', experience_controller_1.experienceControllers.getAllExperience);
router.patch('/:id', (0, auth_1.default)(), (0, validateRequest_1.default)(experience_validation_1.experienceValidation.editExperienceSchema, true), experience_controller_1.experienceControllers.editExperience);
router.delete('/:id', (0, auth_1.default)(), experience_controller_1.experienceControllers.deleteExperience);
const experienceRoutes = router;
exports.default = experienceRoutes;
