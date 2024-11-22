import { Request, Response } from 'express';
import { adminServices } from './admin.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single User.
const createAdmin = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await adminServices.createAdmin(req.body);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: result.message,
    data: result,
  });
});

// Controller function to handle Login
const loginAdmin = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await adminServices.loginAdmin(req.body);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'Log In Successful',
    data: result,
  });
});

const verifyOtp = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await adminServices.verifyOtp(req.body.otp);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'Otp Verified Successfully',
    data: result,
  });
});

const sendForgotPasswordEmail = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await adminServices.sendForgotPasswordEmail(req.body.email);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: result.message,
    data: result,
  });
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const { email, password, otp } = req.body;
  // Call the service method to create a new user and get the result
  const result = await adminServices.forgotPassword({ email, password, otp } as {
    email: string;
    password: string;
    otp: string;
  });
  // Send a success response with the created resource data
  sendResponse(res, {
    message: result.message,
    data: result,
  });
});

const verifyForgotPassword = catchAsync(async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  // Call the service method to create a new user and get the result
  const result = await adminServices.verifyForgotOtp({ email, otp } as {
    email: string;
    password: string;
    otp: string;
  });
  // Send a success response with the created resource data
  sendResponse(res, {
    message: result.message,
    data: result,
  });
});

const getAdmin = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await adminServices.getAdmin();
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'Admin Retrieved Successfully',
    data: result,
  });
});

export const adminControllers = {
  createAdmin,
  loginAdmin,
  verifyOtp,
  sendForgotPasswordEmail,
  forgotPassword,
  verifyForgotPassword,
  getAdmin,
};

