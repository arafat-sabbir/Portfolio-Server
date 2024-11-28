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
exports.educationControllers = void 0;
const education_service_1 = require("./education.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single Education.
const createEducation = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new education and get the result
    const result = yield education_service_1.educationServices.createEducation(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Education created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single education by ID.
const getSingleEducation = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the education by ID and get the result
    const result = yield education_service_1.educationServices.getEducationById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Education Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple education.
const getAllEducation = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple education based on query parameters and get the result
    const result = yield education_service_1.educationServices.getAllEducation(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Educations Retrieved Successfully',
        data: result,
    });
}));
const editEducation = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the education by ID and get the result
    const result = yield education_service_1.educationServices.editEducation(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Education Updated Successfully',
        data: result,
    });
}));
const deleteEducation = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the education by ID and get the result
    const result = yield education_service_1.educationServices.deleteEducation(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Education Deleted Successfully',
        data: result,
    });
}));
exports.educationControllers = {
    createEducation,
    getSingleEducation,
    getAllEducation,
    editEducation,
    deleteEducation
};
