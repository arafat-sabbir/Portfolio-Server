import mongoose, { Schema } from 'mongoose';
import { TSocial } from './social.interface';

// Define an interface representing a Social document

// Define the Social schema
const SocialSchema: Schema<TSocial> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Social name is required'],
      enum: ['facebook', 'linkedin', 'twitter', 'instagram', 'github', 'youtube'],
      trim: true,
    },
    url: {
      type: String,
      required: [true, 'Social value is required'],
      trim: true,
    },
  },
  { timestamps: false, versionKey: false }
);

// Create the Social model
const SocialModel = mongoose.model<TSocial>('Social', SocialSchema);

// Export the Social model
export default SocialModel;

