import mongoose, { Schema } from 'mongoose';
import { TWork } from './work.interface';

// Define an interface representing a Work document

// Define the Work schema
const WorkSchema: Schema<TWork> = new Schema({
  // Define schema fields here
  // Example fields (replace with actual schema)
  // fieldName: {
  //   type: Schema.Types.FieldType,
  //   required: true,
  //   trim: true,
  // },
},{timestamps:true,versionKey:false});

// Create the Work model
const WorkModel = mongoose.model<TWork>('Work', WorkSchema);

// Export the Work model
export default WorkModel;