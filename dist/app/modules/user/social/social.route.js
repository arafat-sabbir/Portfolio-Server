"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const social_controller_1 = require("./social.controller");
const social_validation_1 = require("./social.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const auth_1 = __importDefault(require("../../../middlewares/auth"));
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(social_validation_1.socialValidation.createSocialSchema), social_controller_1.socialControllers.createSocial);
router.get('/', social_controller_1.socialControllers.getAllSocial);
router.get('/', social_controller_1.socialControllers.getSingleSocial);
router.patch('/', (0, validateRequest_1.default)(social_validation_1.socialValidation.editSocialValidationSchema), social_controller_1.socialControllers.editSocial);
router.delete('/:id', (0, auth_1.default)(), social_controller_1.socialControllers.deleteSocial);
const socialRoutes = router;
exports.default = socialRoutes;
