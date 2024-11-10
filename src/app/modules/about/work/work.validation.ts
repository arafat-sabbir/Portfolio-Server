import { z } from 'zod';

// Validation Schema For createWork
const createWorkSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    photo: z.string({ required_error: 'Photo is required' }),
  }),
});

const editWorkSchema = z.object({
  body: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      photo: z.string().optional(),
    })
    .partial(),
});

export const workValidation = {
  createWorkSchema,
  editWorkSchema
};

