"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createClient
const createClientSchema = zod_1.z.object({
    body: zod_1.z.object({
        photo: zod_1.z.string({ required_error: 'Client Photo is required' }),
    }),
});
exports.clientValidation = {
    createClientSchema,
};
