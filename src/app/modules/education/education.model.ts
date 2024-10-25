import mongoose, { Schema } from 'mongoose';
import { TEducation } from './education.interface';

// Define an interface representing a Education document

const EducationSchema: Schema<TEducation> = new Schema({
  instituteName: {
    type: String,
    required: [true, 'Institute name is required'],
    trim: true,
  },
  degreeName: {
    type: String,
    required: [true, 'Degree name is required'],
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
  },
  endDate: {
    type: Date,
    required: [true, 'End date is required'],
  },
}, { timestamps: true, versionKey: false });

// Create the Education model
const EducationModel = mongoose.model<TEducation>('Education', EducationSchema);

// Export the Education model
export default EducationModel;