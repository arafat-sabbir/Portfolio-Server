import { z } from 'zod';

// Validation Schema For createSkill
const createSkillSchema = z.object({
  body: z.object({
    skill: z.string({ required_error: 'Skill name is required' }),
    level: z.string({ required_error: 'Skill level is required' }),
    photo: z.string({ required_error: 'Skill photo is required' }),
  }),
});

const editSkillSchema = z.object({
  body: z
    .object({
      skill: z.string().optional(),
      level: z.string().optional(),
      photo: z.string().optional(),
    })
    .partial(),
});

export const skillValidation = {
  createSkillSchema,
  editSkillSchema,
};
