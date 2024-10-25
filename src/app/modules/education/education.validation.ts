import { z } from 'zod';

// Validation Schema For createEducation
const createEducationSchema = z.object({
  body: z.object({
    instituteName: z.string({ required_error: 'Institute name is required' }),
    degreeName: z.string({ required_error: 'Degree name is required' }),
    startDate: z.string({ required_error: 'Start date is required' }),
    endDate: z.string({ required_error: 'End date is required' }),
  }),
});

// Validation Schema For editEducation
const editEducationSchema = z.object({
  body: z.object({
    instituteName: z.string().optional(),
    degreeName: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }).partial(),
});

export const educationValidation = {
  createEducationSchema,
  editEducationSchema
};
