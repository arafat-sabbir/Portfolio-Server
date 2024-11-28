"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createWork
const createWorkSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        photo: zod_1.z.string({ required_error: 'Photo is required' }),
    }),
});
const editWorkSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        photo: zod_1.z.string().optional(),
    })
        .partial(),
});
exports.workValidation = {
    createWorkSchema,
    editWorkSchema
};
