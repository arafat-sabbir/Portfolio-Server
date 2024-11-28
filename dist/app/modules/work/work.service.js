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
exports.workServices = void 0;
// Import the model
const deleteImage_1 = __importDefault(require("../../utils/deleteImage"));
const work_model_1 = __importDefault(require("./work.model"));
// Service function to create a new work.
const createWork = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newWork = yield work_model_1.default.create(data);
    return newWork;
});
// Service function to retrieve a single work by ID.
const getWorkById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield work_model_1.default.findById(id);
});
// Service function to retrieve multiple work based on query parameters.
const getAllWork = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield work_model_1.default.find(query);
});
const editWork = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingWork = yield work_model_1.default.findById(id);
    if (!existingWork) {
        throw new Error('Work not found');
    }
    if (payload.photo) {
        (0, deleteImage_1.default)(existingWork.photo);
    }
    // Initialize updatedData as an empty object
    let updatedData = {};
    Object.keys(payload).forEach((key) => {
        // Ensure key is of type keyof TBlog and payload[key] is not undefined
        const typedKey = key;
        if (payload[typedKey] !== undefined) {
            updatedData = Object.assign(Object.assign({}, updatedData), { [typedKey]: payload[typedKey] });
        }
    });
    // Find and update the blog by ID
    const updatedWork = yield work_model_1.default.findByIdAndUpdate(id, updatedData, {
        new: true,
    });
    return updatedWork;
});
const deleteWork = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingWork = yield work_model_1.default.findById(id);
    if (!existingWork) {
        throw new Error('Work not found');
    }
    if (existingWork.photo) {
        (0, deleteImage_1.default)(existingWork.photo);
    }
    const deletedWork = yield work_model_1.default.findByIdAndDelete(id);
    return deletedWork;
});
exports.workServices = {
    createWork,
    getWorkById,
    getAllWork,
    editWork,
    deleteWork
};
