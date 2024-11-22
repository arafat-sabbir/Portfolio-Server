/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the model
import deleteFile from '../../../utils/deleteImage';
import { TUser } from './user.interface';
import UserModel from './user.model';

const updateUser = async (payload: TUser) => {
  const updatedData: Partial<TUser> = {};

  // Filter out undefined, null, and empty string values
  Object.keys(payload).forEach((key) => {
    const typedKey = key as keyof TUser;
    if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
      updatedData[typedKey] = payload[typedKey];
    }
  });

  // Check if a user exists
  const existingUser = await UserModel.findOne();

  if (existingUser) {
    // If a photo exists, delete the old one
    if (existingUser.photo && updatedData.photo) {
      deleteFile(existingUser.photo);
    }
    // Update the existing user
    const updatedUser = await UserModel.findOneAndUpdate({}, updatedData, { new: true });
    return updatedUser;
  } else {
    // Create a new user with the provided data
    const newUser = new UserModel(updatedData);
    await newUser.save();
    return newUser;
  }
};

// Service function to retrieve a single user by ID.
const getUser = async () => {
  return await UserModel.findOne();
};
export const userServices = {
  updateUser,
  getUser,
};
