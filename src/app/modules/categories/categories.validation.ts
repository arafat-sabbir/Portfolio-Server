import { z } from 'zod';

// Validation Schema For createCategories
const createCategoriesSchema = z.object({
  body: z.object({
    category: z.string({ required_error: 'Portfolio categories is required' }),
  }),
});

export const categoriesValidation = {
  createCategoriesSchema,
};

