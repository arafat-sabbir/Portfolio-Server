import mongoose, { Schema, Model } from 'mongoose';


import { TUser } from './user.interface';

// Define an interface representing a User document

// Define the User schema
const UserSchema: Schema<TUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    location: {
      type: String,
    },
    designation: {
      type: String,
    },
    dob: {
      type: String,
    },
    phone: {
      type: String,
    },
    displayEmail: {
      type: String,
    },
    bio: {
      type: String,
    },
    locationLink: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);


// Create the User model
const UserModel: Model<TUser> = mongoose.model<TUser>('User', UserSchema);

// Export the User model
export default UserModel;

