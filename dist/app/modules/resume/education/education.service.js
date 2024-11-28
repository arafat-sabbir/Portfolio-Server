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
exports.educationServices = void 0;
const education_model_1 = __importDefault(require("./education.model"));
// Service function to create a new education.
const createEducation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newEducation = yield education_model_1.default.create(data);
    return newEducation;
});
// Service function to retrieve a single education by ID.
const getEducationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield education_model_1.default.findById(id);
});
// Service function to retrieve multiple education based on query parameters.
const getAllEducation = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield education_model_1.default.find(query);
});
const editEducation = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Initialize updatedData as an empty object
    let updatedData = {};
    Object.keys(payload).forEach((key) => {
        // Ensure key is of type keyof TExperience and payload[key] is not undefined
        const typedKey = key;
        if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
            updatedData = Object.assign(Object.assign({}, updatedData), { [typedKey]: payload[typedKey] });
        }
    });
    const updatedEducation = yield education_model_1.default.findByIdAndUpdate(id, updatedData, {
        new: true,
    });
    return updatedEducation;
});
const deleteEducation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const education = yield education_model_1.default.findById(id);
    if (!education) {
        throw new Error('Education not found');
    }
    return yield education_model_1.default.findByIdAndDelete(id);
});
exports.educationServices = {
    createEducation,
    getEducationById,
    getAllEducation,
    editEducation,
    deleteEducation
};
