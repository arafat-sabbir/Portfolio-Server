import { Request, Response } from 'express';
import { userServices } from './user.service';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

const getUser = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple user based on query parameters and get the result
  const result = await userServices.getUser();
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Profile Info Retrieved Successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to update the user by ID and get the result
  const result = await userServices.updateUser(req.body);
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: 'Profile Info Updated Successfully',
    data: result,
  });
});

export const userControllers = {
  getUser,
  updateUser,
};
