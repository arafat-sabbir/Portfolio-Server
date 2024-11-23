import mongoose, { Schema } from 'mongoose';
import { TCategories } from './categories.interface';

// Define an interface representing a Categories document

// Define the Categories schema
const CategoriesSchema: Schema<TCategories> = new Schema(
  {
    portfolioCategories: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create the Categories model
const CategoriesModel = mongoose.model<TCategories>('Categories', CategoriesSchema);

// Export the Categories model
export default CategoriesModel;
