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
exports.skillControllers = void 0;
const skill_service_1 = require("./skill.service");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
// Controller function to handle the creation of a single Skill.
const createSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new skill and get the result
    const result = yield skill_service_1.skillServices.createSkill(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Skill created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single skill by ID.
const getSingleSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the skill by ID and get the result
    const result = yield skill_service_1.skillServices.getSkillById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Skill Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple skill.
const getAllSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple skill based on query parameters and get the result
    const result = yield skill_service_1.skillServices.getAllSkill(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Skills Retrieved Successfully',
        data: result,
    });
}));
const editSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the skill by ID and get the result
    const result = yield skill_service_1.skillServices.editSkill(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Skill Updated Successfully',
        data: result,
    });
}));
const deleteSkill = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the skill by ID and get the result
    const result = yield skill_service_1.skillServices.deleteSkill(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Skill Deleted Successfully',
        data: result,
    });
}));
exports.skillControllers = {
    createSkill,
    getSingleSkill,
    getAllSkill,
    editSkill,
    deleteSkill,
};
