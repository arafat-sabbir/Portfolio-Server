"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const education_controller_1 = require("./education.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const education_validation_1 = require("./education.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(), (0, validateRequest_1.default)(education_validation_1.educationValidation.createEducationSchema, true), education_controller_1.educationControllers.createEducation);
router.get('/:id', education_controller_1.educationControllers.getSingleEducation);
router.get('/', education_controller_1.educationControllers.getAllEducation);
router.patch('/:id', (0, auth_1.default)(), (0, validateRequest_1.default)(education_validation_1.educationValidation.editEducationSchema, true), education_controller_1.educationControllers.editEducation);
router.delete('/:id', (0, auth_1.default)(), education_controller_1.educationControllers.deleteEducation);
const educationRoutes = router;
exports.default = educationRoutes;
