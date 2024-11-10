import mongoose, { Schema } from 'mongoose';
import { TExperience } from './experience.interface';

// Define an interface representing a Experience document

// Define the Experience schema
const ExperienceSchema: Schema<TExperience> = new Schema({
  companyName: {
    type: String,
    required: [true, 'Company Name is required'],
    trim: true,
  },
  position: {
    type: String,
    required: [true, 'Position is required'],
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Start Date is required'],
  },
  endDate: {
    type: Date,
    required: [true, 'End Date is required'],
  },
}, { timestamps: true, versionKey: false });

// Create the Experience model
const ExperienceModel = mongoose.model<TExperience>('Experience', ExperienceSchema);

// Export the Experience model
export default ExperienceModel;