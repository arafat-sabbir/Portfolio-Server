import mongoose, { Schema } from 'mongoose';
import { TEducation } from './education.interface';

// Define an interface representing a Education document

// Define the Education schema
const EducationSchema: Schema<TEducation> = new Schema({
  // Define schema fields here
  // Example fields (replace with actual schema)
  // fieldName: {
  //   type: Schema.Types.FieldType,
  //   required: true,
  //   trim: true,
  // },
},{timestamps:true,versionKey:false});

// Create the Education model
const EducationModel = mongoose.model<TEducation>('Education', EducationSchema);

// Export the Education model
export default EducationModel;