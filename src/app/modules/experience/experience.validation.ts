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

export const experienceValidation = {
  createExperienceSchema,
};
