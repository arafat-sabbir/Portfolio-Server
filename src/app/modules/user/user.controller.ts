import { Request, Response } from 'express';
import { userServices } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single User.
const createUser = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await userServices.createUser(req.body);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'New user Added Successfully',
    data: result,
  });
});

// Controller function to handle Login
const loginUser = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new user and get the result
  const result = await userServices.loginUser(req.body);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'Log In Successful',
    data: result,
  });
});

const getUser = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple user based on query parameters and get the result
  const result = await userServices.getUser();
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Users Retrieved Successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to update the user by ID and get the result
  const result = await userServices.updateUser(req.body);
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: 'Admin Updated Successfully',
    data: result,
  });
});

export const userControllers = {
  createUser,
  getUser,
  loginUser,
  updateUser
};
