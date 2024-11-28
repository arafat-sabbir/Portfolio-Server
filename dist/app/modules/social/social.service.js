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
exports.socialServices = void 0;
const social_model_1 = __importDefault(require("./social.model"));
// Service function to create a new social.
const createSocial = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newSocial = yield social_model_1.default.create(data);
    return newSocial;
});
// Service function to retrieve a single social by ID.
const getSocialById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield social_model_1.default.findById(id);
});
// Service function to retrieve multiple social based on query parameters.
const getAllSocial = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return yield social_model_1.default.find(query);
});
const editSocial = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield social_model_1.default.findOneAndUpdate({ name: payload.name }, payload, { new: true });
});
exports.socialServices = {
    createSocial,
    getSocialById,
    getAllSocial,
    editSocial,
};
