"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = __importDefault(require("../middlewares/auth"));
const convertFilePath_1 = __importDefault(require("./convertFilePath"));
const multer_1 = require("./multer");
/**
 * Middleware pipeline function to handle authorization, photo upload,
 * and file path conversion.
 */
const uploadSinglePhoto = () => [
    (0, auth_1.default)(),
    multer_1.upload.single('photo'),
    convertFilePath_1.default,
    (req, res, next) => {
        // Add the uploaded file path to the request body
        if (req.file) {
            req.body.photo = req.file.path;
        }
        next();
    },
];
exports.default = uploadSinglePhoto;
