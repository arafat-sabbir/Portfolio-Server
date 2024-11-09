import mongoose, { Schema } from 'mongoose';
import { TWork } from './work.interface';

// Define an interface representing a Work document

// Define the Work schema
const WorkSchema: Schema<TWork> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create the Work model
const WorkModel = mongoose.model<TWork>('Work', WorkSchema);

// Export the Work model
export default WorkModel;
