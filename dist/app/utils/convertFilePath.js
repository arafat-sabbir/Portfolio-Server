"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Middleware to convert file path to a URL-friendly path
const convertFilePath = (req, res, next) => {
    if (req.file) {
        const fullPath = req.file.path;
        const relativePath = fullPath.split('public')[1];
        req.file.path = relativePath.replace(/\\/g, '/'); // Save the URL-friendly path
    }
    if (req.files && Array.isArray(req.files)) {
        req.files.forEach((file) => {
            const fullPath = file.path;
            const relativePath = fullPath.split('public')[1];
            file.path = relativePath.replace(/\\/g, '/');
        });
    }
    next(); // Proceed to the next middleware/controller
};
exports.default = convertFilePath;
