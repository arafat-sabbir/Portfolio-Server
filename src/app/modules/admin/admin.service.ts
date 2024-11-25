/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the model
import mongoose from 'mongoose';
import config from '../../config';
import generateToken from '../../utils/generateToken';
import sendOtp from '../../utils/sendOtp';
import { TAdmin } from './admin.interface';
import AdminModel from './admin.model';
import bcrypt from 'bcrypt';

// Service function to create a new user.

const createAdmin = async (payload: TAdmin) => {
  const session = await AdminModel.startSession(); // Start a session
  session.startTransaction(); // Start the transaction

  try {
    // Check if an admin already exists
    const existingUser = await AdminModel.findOne().session(session);
    if (existingUser?.isVerified) throw new Error('Admin Already Exists');
    if (existingUser?.email != payload.email) throw new Error('You Can Only Create One Admin');
    // Generate a random 6-digit OTP
    const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
    const otp = generateOtp();

    // Send the OTP via email
    const sentOtp = await sendOtp({ email: payload.email, otp });
    if (!sentOtp) throw new Error('Failed to send OTP');

    const hashedOtp = bcrypt.hashSync(String(otp), 10);
    // Save the OTP to the database

    if (existingUser) {
      await AdminModel.findOneAndUpdate(
        { email: payload.email },
        { otp: hashedOtp },
        { new: true, session }
      );
    } else {
      await AdminModel.create([{ ...payload, otp: hashedOtp }], { session });
    }
    // Create the new admin

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    return { message: 'Otp Sent Successfully' };
  } catch (error: any) {
    // Rollback the transaction in case of an error
    await session.abortTransaction();
    session.endSession();

    console.error('Transaction failed:', error);
    throw new Error(error.message || 'Failed to create admin');
  }
};

// Service function to Login User And Return A Token

const loginAdmin = async (payload: { email: string; password: string }) => {
  const user = await AdminModel.findOne({ email: payload.email });
  if (!user) {
    throw new Error('Invalid Email Address Try Again');
  }
  if (!user.isVerified) {
    throw new Error('Admin is not verified');
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

const verifyOtp = async (otp: string) => {
  const otpExist = await AdminModel.findOne();
  if (!otpExist) {
    throw new Error('No Admin Exist');
  }
  console.log(otp, otpExist.otp);
  const matchOtp = bcrypt.compareSync(otp, otpExist.otp);
  if (!matchOtp) {
    throw new Error('Incorrect Otp Provided');
  } else {
    const updateAdmin = AdminModel.findOneAndUpdate(
      {},
      { otp: null, isVerified: true },
      { new: true }
    );
    return updateAdmin;
  }
};

const sendForgotPasswordEmail = async (email: string) => {
  const user = await AdminModel.findOne({ email: email });
  if (!user) {
    throw new Error('User not found');
  }
  // Generate a random 6-digit OTP
  const generateOtp = () => Math.floor(100000 + Math.random() * 900000);
  const otp = generateOtp();

  // Send the OTP via email
  const sentOtp = await sendOtp({ email, otp });
  if (!sentOtp) throw new Error('Failed to send OTP');

  const hashedOtp = bcrypt.hashSync(String(otp), 10);
  await AdminModel.findOneAndUpdate({ email: email }, { forgotOtp: hashedOtp }, { new: true });
  return { message: 'Otp Sent Successfully' };
};

const forgotPassword = async ({
  otp,
  email,
  password,
}: {
  otp: string;
  email: string;
  password: string;
}) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const admin = await AdminModel.findOne({ email });
    if (!admin) {
      throw new Error('Admin not found');
    }
    if (!admin.forgotOtp) {
      throw new Error('No Otp Found');
    }
    const matchOtp = bcrypt.compareSync(otp, admin.forgotOtp);
    if (!matchOtp) {
      throw new Error('Incorrect Otp Provided');
    } else {
      await AdminModel.findOneAndUpdate(
        { email },
        { password: bcrypt.hashSync(password, 10), forgotOtp: null },
        { new: true, session }
      );
    }
    await session.commitTransaction();
    session.endSession();
    return { message: 'Password Updated Successfully' };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const verifyForgotOtp = async ({ email, otp }: { email: string; otp: string }) => {
  const admin = await AdminModel.findOne({ email });
  if (!admin) {
    throw new Error('Admin not found');
  }
  if (!admin.forgotOtp) {
    throw new Error('No Otp Found');
  }
  const matchOtp = bcrypt.compareSync(otp, admin.forgotOtp);
  if (!matchOtp) {
    throw new Error('Incorrect Otp Provided');
  }
  return { message: 'Otp Verified Successfully' };
};

const getAdmin = async () => {
  const admin = await AdminModel.findOne();
  return admin;
};

// Generate a random 6-digit OTP

export const adminServices = {
  createAdmin,
  loginAdmin,
  verifyOtp,
  sendForgotPasswordEmail,
  forgotPassword,
  verifyForgotOtp,
  getAdmin,
};

