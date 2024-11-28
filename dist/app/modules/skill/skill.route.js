"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Router from express
// Import Router from express
const express_1 = require("express");
// Import controller from corresponding module
const skill_controller_1 = require("./skill.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const skill_validation_1 = require("./skill.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const multer_1 = require("../../utils/multer");
const convertFilePath_1 = __importDefault(require("../../utils/convertFilePath"));
// Initialize router
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(), multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { photo: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, (0, validateRequest_1.default)(skill_validation_1.skillValidation.createSkillSchema), skill_controller_1.skillControllers.createSkill);
router.get('/', skill_controller_1.skillControllers.getAllSkill);
router.patch('/:id', multer_1.upload.single('photo'), convertFilePath_1.default, (req, res, next) => {
    var _a;
    req.body = Object.assign(Object.assign({}, req.body), { photo: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path });
    next();
}, (0, auth_1.default)(), (0, validateRequest_1.default)(skill_validation_1.skillValidation.editSkillSchema), skill_controller_1.skillControllers.editSkill);
router.delete('/:id', (0, auth_1.default)(), skill_controller_1.skillControllers.deleteSkill);
router.get('/:id', skill_controller_1.skillControllers.getSingleSkill);
const skillRoutes = router;
exports.default = skillRoutes;
