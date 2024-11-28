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
exports.skillServices = void 0;
// Import the model
const deleteImage_1 = __importDefault(require("../../utils/deleteImage"));
const skill_model_1 = __importDefault(require("./skill.model"));
// Service function to create a new skill.
const createSkill = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newSkill = yield skill_model_1.default.create(data);
    return newSkill;
});
// Service function to retrieve a single skill by ID.
const getSkillById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skill_model_1.default.findById(id);
});
// Service function to retrieve multiple skill based on query parameters.
const getAllSkill = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield skill_model_1.default.find(query);
});
const editSkill = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Initialize updatedData as an empty object
    const skill = yield skill_model_1.default.findById(id);
    if (!skill) {
        throw new Error('Skill not found');
    }
    if (skill.photo) {
        (0, deleteImage_1.default)(skill.photo);
    }
    let updatedData = {};
    Object.keys(payload).forEach((key) => {
        // Ensure key is of type keyof TSkill and payload[key] is not undefined
        const typedKey = key;
        if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
            updatedData = Object.assign(Object.assign({}, updatedData), { [typedKey]: payload[typedKey] });
        }
    });
    const updatedSkill = yield skill_model_1.default.findByIdAndUpdate(id, updatedData, {
        new: true,
    });
    return updatedSkill;
});
const deleteSkill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const skill = yield skill_model_1.default.findById(id);
    if (!skill) {
        throw new Error('Skill not found');
    }
    if (skill.photo) {
        (0, deleteImage_1.default)(skill.photo);
    }
    return yield skill_model_1.default.findByIdAndDelete(id);
});
exports.skillServices = {
    createSkill,
    getSkillById,
    getAllSkill,
    editSkill,
    deleteSkill,
};
