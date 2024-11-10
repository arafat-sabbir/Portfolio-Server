import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { aboutServices } from './about.service';

const getAllAboutContent = catchAsync(async (req: Request, res: Response) => {
  const result = await aboutServices.getAboutContent();
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: 'About Content Retrieved Successfully',
    data: result,
  });
});

export const aboutController = { getAllAboutContent };
