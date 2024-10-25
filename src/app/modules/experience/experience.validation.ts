import { z } from 'zod';

// Validation Schema For createExperience
const createExperienceSchema = z.object({
  body: z.object({
    companyName: z.string({ required_error: 'Company name is required' }),
    position: z.string({ required_error: 'Position is required' }),
    startDate: z.date({ required_error: 'Start date is required' }),
    endDate: z.date({ required_error: 'End date is required' }),
  }),
});

// Validation Schema For editExperience
const editExperienceSchema = z.object({
  body: z.object({
    companyName: z.string().optional(),
    position: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
  }).partial(),
});

export const experienceValidation = {
  createExperienceSchema,
  editExperienceSchema
};
