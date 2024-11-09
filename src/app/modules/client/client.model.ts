import mongoose, { Schema } from 'mongoose';
import { TClient } from './client.interface';

// Define an interface representing a Client document

// Define the Client schema
const ClientSchema: Schema<TClient> = new Schema({
  photo: {
    type: String,
    required: true
  }
},{timestamps:true,versionKey:false});

// Create the Client model
const ClientModel = mongoose.model<TClient>('Client', ClientSchema);

// Export the Client model
export default ClientModel;