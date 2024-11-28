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
exports.experienceControllers = void 0;
const experience_service_1 = require("./experience.service");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
// Controller function to handle the creation of a single Experience.
const createExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new experience and get the result
    const result = yield experience_service_1.experienceServices.createExperience(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Experience created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single experience by ID.
const getSingleExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the experience by ID and get the result
    const result = yield experience_service_1.experienceServices.getExperienceById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Experience Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple experience.
const getAllExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple experience based on query parameters and get the result
    const result = yield experience_service_1.experienceServices.getAllExperience(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Experiences Retrieved Successfully',
        data: result,
    });
}));
const editExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the experience by ID and get the result
    const result = yield experience_service_1.experienceServices.editExperience(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Experience Updated Successfully',
        data: result,
    });
}));
const deleteExperience = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the experience by ID and get the result
    const result = yield experience_service_1.experienceServices.deleteExperience(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Experience Deleted Successfully',
        data: result,
    });
}));
exports.experienceControllers = {
    createExperience,
    getSingleExperience,
    getAllExperience,
    editExperience,
    deleteExperience,
};
