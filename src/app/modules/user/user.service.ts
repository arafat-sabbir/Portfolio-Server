/* eslint-disable @typescript-eslint/no-unused-vars */
// Import the model
import config from '../../config';
import deleteFile from '../../utils/deleteImage';
import generateToken from '../../utils/generateToken';
import { hashInfo } from '../../utils/hashInfo';
import { TUser } from './user.interface';
import UserModel from './user.model';
import bcrypt from 'bcrypt';

// Service function to create a new user.

const createUser = async (payload: TUser) => {
  const { password, ...data } = payload;
  const existingUser = await UserModel.findOne();
  if (existingUser) throw new Error('Admin Already Exists');
  const hashedPassword = await hashInfo(password);
  const newUser = await UserModel.create({ password: hashedPassword, ...data });
  return newUser;
};

// Service function to Login User And Return A Token

const loginUser = async (payload: { email: string; password: string }) => {
  const user = await UserModel.findOne({ email: payload.email });
  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = bcrypt.compareSync(payload.password, user.password);
  if (!isMatch) {
    throw new Error('Incorrect Password Try Again');
  }

  const token = await generateToken(
    { id: user._id, role: 'admin' },
    config.jwt_access_secret as string,
    config.jwt_access_expires as string
  );
  return { token };
};

// Service function to retrieve a single user by ID.

const getUser = async () => {
  return await UserModel.findOne();
};

const updateUser = async (payload: TUser) => {
  const { password, email, ...data } = payload;
  let updatedData: Partial<TUser> = {};

  Object.keys(data).forEach((key) => {
    const typedKey = key as keyof TUser;
    if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
      updatedData = { ...updatedData, [typedKey]: (data as TUser)[typedKey] };
    }
  });

  const user = await UserModel.findOne();
  if (!user) {
    throw new Error('No Admin found');
  }

  // If a photo exists, delete it
  if (user.photo) {
    deleteFile(user.photo);
  }

  // Spread `updatedData` so the fields are updated correctly
  const updatedUser = await UserModel.findOneAndUpdate({}, updatedData, { new: true });
  return updatedUser;
};

// Service function to retrieve multiple user based on query parameters.

export const userServices = {
  createUser,
  getUser,
  loginUser,
  updateUser,
};
