"use strict";
//An Custom Error Handler For Handleing The Mongoose Duplicate Error
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const statusCode = 400;
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSources = [
        {
            path: err.keyValue,
            message: `${extractedMessage} already exists`,
        },
    ];
    return { statusCode, message: `${extractedMessage} already exists`, errorSources };
};
exports.default = handleDuplicateError;
