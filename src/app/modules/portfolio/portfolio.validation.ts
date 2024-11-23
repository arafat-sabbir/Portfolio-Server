import { z } from "zod";

// Validation Schema For createPortfolio
const createPortfolioSchema = z.object({
  body:z.object({
    title: z.string({required_error: 'Title is required'}),
    category: z.string({required_error: 'Category is required'}),
    description: z.string({required_error: 'Description is required'}),
    technologiesUsed: z.array(z.string()).min(1, { message: 'At least one technology is required' }),
    features: z.array(z.string()).min(1, { message: 'At least one feature is required' }),
    livePreview: z.string().url().optional(),
    thumbnail: z.string({required_error: 'Thumbnail is required'}),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    currentlyWorking: z.boolean().optional(),
  })
})

export const portfolioValidation = {
  createPortfolioSchema
}