"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const resume_controller_1 = require("./resume.controller");
const router = express_1.default.Router();
router.get('/', resume_controller_1.resumeController.getAllResumeContent);
exports.resumeRoutes = router;
