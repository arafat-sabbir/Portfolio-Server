import { z } from 'zod';

// Validation Schema For createSkill
const createSkillSchema = z.object({
  body: z.object({
    skill: z.string({ required_error: 'Skill name is required' }),
    level: z.number({ required_error: 'Skill level is required' }),
  }),
});

const editSkillSchema = z.object({
  body: z
    .object({
      skill: z.string().optional(),
      level: z.number().optional(),
    })
    .partial(),
});

export const skillValidation = {
  createSkillSchema,
  editSkillSchema
};

