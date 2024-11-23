import mongoose, { Schema } from 'mongoose';
import { TPortfolio } from './portfolio.interface';

// Define an interface representing a Portfolio document

// Define the Portfolio schema
const PortfolioSchema: Schema<TPortfolio> = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    technologiesUsed: {
      type: [String],
      required: [true, 'Technologies Used is required'],
    },
    features: {
      type: [String],
      required: [true, 'Features is required'],
    },
    livePreview: {
      type: String,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required'],
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
    },
    reviews: {
      type: [Schema.Types.ObjectId],
      ref: 'Review',
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
    },
    currentlyWorking: {
      type: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create the Portfolio model
const PortfolioModel = mongoose.model<TPortfolio>('Portfolio', PortfolioSchema);

// Export the Portfolio model
export default PortfolioModel;

