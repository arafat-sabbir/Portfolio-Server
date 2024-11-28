"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createBlog
// Zod schema definition
const createBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        category: zod_1.z.string({ required_error: 'Category is required' }),
        content: zod_1.z.string({ required_error: 'Content is required' }),
        photo: zod_1.z.string({ required_error: 'Photo is required' }),
    }),
});
// Exporting validation schemas
exports.blogValidation = {
    createBlogSchema,
};
