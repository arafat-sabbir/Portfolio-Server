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
exports.clientControllers = void 0;
const client_service_1 = require("./client.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
// Controller function to handle the creation of a single Client.
const createClient = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to create a new client and get the result
    const result = yield client_service_1.clientServices.createClient(req.body);
    // Send a success response with the created resource data
    (0, sendResponse_1.default)(res, {
        message: 'New Client created Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of a single client by ID.
const getSingleClient = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to get the client by ID and get the result
    const result = yield client_service_1.clientServices.getClientById(id);
    // Send a success response with the retrieved resource data
    (0, sendResponse_1.default)(res, {
        message: 'Client Retrieved Successfully',
        data: result,
    });
}));
// Controller function to handle the retrieval of multiple client.
const getAllClient = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service method to get multiple client based on query parameters and get the result
    const result = yield client_service_1.clientServices.getAllClient(req.query);
    // Send a success response with the retrieved resources data
    (0, sendResponse_1.default)(res, {
        message: 'Clients Retrieved Successfully',
        data: result,
    });
}));
// Controller Function To Update A Client
const updateClient = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to update the client by ID and get the result
    const result = yield client_service_1.clientServices.updateClient(id, req.body);
    // Send a success response with the updated resource data
    (0, sendResponse_1.default)(res, {
        message: 'Client Updated Successfully',
        data: result,
    });
}));
const deleteClient = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Call the service method to delete the client by ID and get the result
    const result = yield client_service_1.clientServices.deleteClient(id);
    // Send a success response with the deleted resource data
    (0, sendResponse_1.default)(res, {
        message: 'Client Deleted Successfully',
        data: result,
    });
}));
exports.clientControllers = {
    createClient,
    getSingleClient,
    getAllClient,
    updateClient,
    deleteClient
};
