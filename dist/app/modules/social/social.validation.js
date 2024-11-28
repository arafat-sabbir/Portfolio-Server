"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createSocial
const createSocialSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum(['facebook', 'linkedin', 'twitter', 'instagram', 'github', 'youtube']),
        url: zod_1.z.string({ required_error: 'Social Url is required' }).url({ message: 'Invalid URL' }),
    }),
});
const editSocialValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum(['facebook', 'linkedin', 'twitter', 'instagram', 'github', 'youtube']),
        url: zod_1.z.string({ required_error: 'Social Url is required' }).url({ message: 'Invalid URL' }),
    }),
});
exports.socialValidation = {
    createSocialSchema,
    editSocialValidationSchema
};
