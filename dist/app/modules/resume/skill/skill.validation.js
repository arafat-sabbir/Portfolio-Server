"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createSkill
const createSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        skill: zod_1.z.string({ required_error: 'Skill name is required' }),
        level: zod_1.z.string({ required_error: 'Skill level is required' }),
        // photo: z.string({ required_error: 'Skill photo is required' }),
    }),
});
const editSkillSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        skill: zod_1.z.string().optional(),
        level: zod_1.z.string().optional(),
        photo: zod_1.z.string().optional(),
    })
        .partial(),
});
exports.skillValidation = {
    createSkillSchema,
    editSkillSchema,
};
