import mongoose, { Schema } from 'mongoose';
import { TClient } from './client.interface';

// Define an interface representing a Client document

// Define the Client schema
const ClientSchema: Schema<TClient> = new Schema({
  // Define schema fields here
  // Example fields (replace with actual schema)
  // fieldName: {
  //   type: Schema.Types.FieldType,
  //   required: true,
  //   trim: true,
  // },
},{timestamps:true,versionKey:false});

// Create the Client model
const ClientModel = mongoose.model<TClient>('Client', ClientSchema);

// Export the Client model
export default ClientModel;