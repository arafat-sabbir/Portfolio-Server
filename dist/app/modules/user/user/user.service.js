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
exports.userServices = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the model
const deleteImage_1 = __importDefault(require("../../../utils/deleteImage"));
const user_model_1 = __importDefault(require("./user.model"));
const updateUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedData = {};
    // Filter out undefined, null, and empty string values
    Object.keys(payload).forEach((key) => {
        const typedKey = key;
        if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
            updatedData[typedKey] = payload[typedKey];
        }
    });
    // Check if a user exists
    const existingUser = yield user_model_1.default.findOne();
    if (existingUser) {
        // If a photo exists, delete the old one
        if (existingUser.photo && updatedData.photo) {
            (0, deleteImage_1.default)(existingUser.photo);
        }
        // Update the existing user
        const updatedUser = yield user_model_1.default.findOneAndUpdate({}, updatedData, { new: true });
        return updatedUser;
    }
    else {
        // Create a new user with the provided data
        const newUser = new user_model_1.default(updatedData);
        yield newUser.save();
        return newUser;
    }
});
// Service function to retrieve a single user by ID.
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield user_model_1.default.findOne();
});
exports.userServices = {
    updateUser,
    getUser,
};
