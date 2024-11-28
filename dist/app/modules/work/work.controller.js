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
exports.workControllers = void 0;
const work_service_1 = require("./work.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single Work.
const createWork = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new work and get the result
    const result = yield work_service_1.workServices.createWork(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Work created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single work by ID.
const getSingleWork = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the work by ID and get the result
    const result = yield work_service_1.workServices.getWorkById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Work Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple work.
const getAllWork = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple work based on query parameters and get the result
    const result = yield work_service_1.workServices.getAllWork(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Works Retrieved Successfully',
        data: result,
    });
}));
const editWork = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the work by ID and get the result
    const result = yield work_service_1.workServices.editWork(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Work Updated Successfully',
        data: result,
    });
}));
const deleteWork = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the work by ID and get the result
    const result = yield work_service_1.workServices.deleteWork(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Work Deleted Successfully',
        data: result,
    });
}));
exports.workControllers = {
    createWork,
    getSingleWork,
    getAllWork,
    editWork,
    deleteWork
};
