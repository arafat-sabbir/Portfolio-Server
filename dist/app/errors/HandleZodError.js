"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (err) => {
    const statusCode = 400;
    const errorSources = err.issues.map((issue) => ({
        path: issue.path[issue.path.length - 1],
        message: issue.message,
    }));
    return {
        success: false,
        statusCode,
        message: err.issues.map((issue) => issue.message),
        errorSources,
    };
};
exports.default = handleZodError;
