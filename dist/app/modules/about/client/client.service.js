"use strict";
// Import the model
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
exports.clientServices = void 0;
const deleteImage_1 = __importDefault(require("../../../utils/deleteImage"));
const client_model_1 = __importDefault(require("./client.model"));
// Service function to create a new client.
const createClient = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newClient = yield client_model_1.default.create(data);
    return newClient;
});
// Service function to retrieve a single client by ID.
const getClientById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_model_1.default.findById(id);
});
// Service function to retrieve multiple client based on query parameters.
const getAllClient = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield client_model_1.default.find(query);
});
const updateClient = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingClient = yield client_model_1.default.findById(id);
    if (!existingClient) {
        throw new Error('Client not found');
    }
    if (existingClient.photo) {
        (0, deleteImage_1.default)(existingClient.photo);
    }
    const updatedClient = yield client_model_1.default.findByIdAndUpdate(id, { photo: payload.photo }, {
        new: true,
    });
    return updatedClient;
});
const deleteClient = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield client_model_1.default.findById(id);
    if (!client) {
        throw new Error('Client not found');
    }
    if (client.photo) {
        (0, deleteImage_1.default)(client.photo);
    }
    return yield client_model_1.default.findByIdAndDelete(id);
});
exports.clientServices = {
    createClient,
    getClientById,
    getAllClient,
    updateClient,
    deleteClient
};
