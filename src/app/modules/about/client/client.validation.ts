import { z } from 'zod';

// Validation Schema For createClient
const createClientSchema = z.object({
  body: z.object({
    photo: z.string({ required_error: 'Client Photo is required' }),
  }),
});

export const clientValidation = {
  createClientSchema,
};

