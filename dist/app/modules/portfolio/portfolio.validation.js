"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createPortfolio
const createPortfolioSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        category: zod_1.z.string({ required_error: 'Category is required' }),
        description: zod_1.z.string({ required_error: 'Description is required' }),
        technologiesUsed: zod_1.z.array(zod_1.z.string()).min(1, { message: 'At least one technology is required' }),
        features: zod_1.z.array(zod_1.z.string()).min(1, { message: 'At least one feature is required' }),
        livePreview: zod_1.z.string().url().optional(),
        thumbnail: zod_1.z.string({ required_error: 'Thumbnail is required' }),
        startDate: zod_1.z.date().optional(),
        endDate: zod_1.z.date().optional(),
        currentlyWorking: zod_1.z.boolean().optional(),
    })
});
exports.portfolioValidation = {
    createPortfolioSchema
};
