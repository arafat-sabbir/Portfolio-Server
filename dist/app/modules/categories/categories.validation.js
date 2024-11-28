"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createCategories
const createCategoriesSchema = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.string({ required_error: 'Portfolio categories is required' }),
    }),
});
exports.categoriesValidation = {
    createCategoriesSchema,
};
