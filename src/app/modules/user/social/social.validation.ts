import { z } from 'zod';

// Validation Schema For createSocial
const createSocialSchema = z.object({
  body: z.object({
    name: z.enum(['facebook', 'linkedin', 'twitter', 'instagram', 'github', 'youtube']),
    url: z.string({ required_error: 'Social Url is required' }).url({ message: 'Invalid URL' }),
  }),
});

const editSocialValidationSchema = z.object({
  body: z.object({
    name: z.enum(['facebook', 'linkedin', 'twitter', 'instagram', 'github', 'youtube']),
    url: z.string({ required_error: 'Social Url is required' }).url({ message: 'Invalid URL' }),
  }),
});

export const socialValidation = {
  createSocialSchema,
  editSocialValidationSchema
};

