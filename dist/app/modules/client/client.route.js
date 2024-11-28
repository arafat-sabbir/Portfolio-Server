"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const client_controller_1 = require("./client.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const client_validation_1 = require("./client.validation");
const uploadSinglePhoto_1 = __importDefault(require("../../utils/uploadSinglePhoto"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, uploadSinglePhoto_1.default)(), (0, validateRequest_1.default)(client_validation_1.clientValidation.createClientSchema), client_controller_1.clientControllers.createClient);
router.get('/', client_controller_1.clientControllers.getAllClient);
router.get('/:id', client_controller_1.clientControllers.getSingleClient);
router.patch('/:id', (0, uploadSinglePhoto_1.default)(), (0, validateRequest_1.default)(client_validation_1.clientValidation.createClientSchema), client_controller_1.clientControllers.updateClient);
router.delete('/:id', (0, auth_1.default)(), client_controller_1.clientControllers.deleteClient);
const clientRoutes = router;
exports.default = clientRoutes;
