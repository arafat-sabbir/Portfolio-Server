"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createEducation
const createEducationSchema = zod_1.z.object({
    body: zod_1.z.object({
        instituteName: zod_1.z.string({ required_error: 'Institute name is required' }),
        degreeName: zod_1.z.string({ required_error: 'Degree name is required' }),
        startDate: zod_1.z.string({ required_error: 'Start date is required' }),
        endDate: zod_1.z.string({ required_error: 'End date is required' }),
    }),
});
// Validation Schema For editEducation
const editEducationSchema = zod_1.z.object({
    body: zod_1.z.object({
        instituteName: zod_1.z.string().optional(),
        degreeName: zod_1.z.string().optional(),
        startDate: zod_1.z.string().optional(),
        endDate: zod_1.z.string().optional(),
    }).partial(),
});
exports.educationValidation = {
    createEducationSchema,
    editEducationSchema
};
