"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Define the absolute path to the folder where the images are stored
const uploadDirectory = path_1.default.join(__dirname, '../../../public');
// Helper function to safely delete an image
const deleteFile = (filePath) => {
    const fullFilePath = path_1.default.join(uploadDirectory, filePath);
    // Check if the file exists before attempting to delete
    if (fs_1.default.existsSync(fullFilePath)) {
        try {
            fs_1.default.unlinkSync(fullFilePath);
            console.log(`Successfully deleted file: ${fullFilePath}`);
        }
        catch (err) {
            console.error(`Failed to delete file: ${fullFilePath}`, err);
        }
    }
    else {
        console.warn(`File not found: ${fullFilePath}`);
    }
};
exports.default = deleteFile;
