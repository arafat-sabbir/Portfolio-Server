import mongoose, { Schema } from 'mongoose';
import { TExperience } from './experience.interface';

// Define an interface representing a Experience document

// Define the Experience schema
const ExperienceSchema: Schema<TExperience> = new Schema({
  // Define schema fields here
  // Example fields (replace with actual schema)
  // fieldName: {
  //   type: Schema.Types.FieldType,
  //   required: true,
  //   trim: true,
  // },
},{timestamps:true,versionKey:false});

// Create the Experience model
const ExperienceModel = mongoose.model<TExperience>('Experience', ExperienceSchema);

// Export the Experience model
export default ExperienceModel;