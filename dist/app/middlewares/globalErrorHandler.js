"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const HandleValidationError_1 = __importDefault(require("../errors/HandleValidationError"));
const HandleZodError_1 = __importDefault(require("../errors/HandleZodError"));
const HandleCastError_1 = __importDefault(require("../errors/HandleCastError"));
const HandleDuplicateError_1 = __importDefault(require("../errors/HandleDuplicateError"));
const AppError_1 = __importDefault(require("../errors/AppError"));
/**
 * Global error handler for Express.js applications.
 * Handles errors that occur during the request-response cycle.
 *
 * @param {Error} error - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @return {Response} The JSON response containing the error message and status code.
 */
const globalErrorHandler = (error, req, res, next) => {
    console.log(error);
    // Set default values for status code, message, and error sources.
    let statusCode = 500;
    let stack = null;
    let message = 'Something Went Wrong';
    let errorSources = [
        {
            path: ' ',
            message: 'Something Went Wrong',
        },
    ];
    // Check the type of error and simplify it accordingly.
    if (error instanceof zod_1.ZodError) {
        const simplifiedError = (0, HandleZodError_1.default)(error);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
        stack = config_1.default.node_env === 'development' && error.stack;
    }
    else if (error.name === 'ValidationError') {
        const simplifiedError = (0, HandleValidationError_1.default)(error);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
        stack = config_1.default.node_env === 'development' && error.stack;
    }
    else if (error.name === 'CastError') {
        const simplifiedError = (0, HandleCastError_1.default)(error);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
        stack = config_1.default.node_env === 'development' && error.stack;
    }
    else if (error.code === 11000) {
        const simplifiedError = (0, HandleDuplicateError_1.default)(error);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorSources = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorSources;
        stack = config_1.default.node_env === 'development' && error.stack;
    }
    else if (error instanceof AppError_1.default) {
        statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error === null || error === void 0 ? void 0 : error.message;
        errorSources = [
            {
                path: ' ',
                message: error.message,
            },
        ];
        stack = config_1.default.node_env === 'development' && error.stack;
    }
    else if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        errorSources = [
            {
                path: ' ',
                message: error.message,
            },
        ];
        stack = config_1.default.node_env === 'development' && error.stack;
    }
    // Return a JSON response with the error message and status code. Ok
    res.status(statusCode).json(Object.assign({ statusCode, success: false, message,
        errorSources }, (stack && { stack })));
};
exports.default = globalErrorHandler;
