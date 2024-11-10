import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { resumeServices } from './resume.service';

const getAllResumeContent = catchAsync(async (req: Request, res: Response) => {
  const result = await resumeServices.getResumeContent();
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: 'All Resume Content Retrieved Successfully',
    data: result,
  });
});

export const resumeController = { getAllResumeContent };
