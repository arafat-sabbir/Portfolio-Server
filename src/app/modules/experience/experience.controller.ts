import { Request, Response } from 'express';
import { experienceServices } from './experience.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single Experience.
const createExperience = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new experience and get the result
  const result = await experienceServices.createExperience(req.body);
  // Send a success response with the created resource data
    sendResponse(res, {
    message: 'New Experience created Successfully',
    data: result,
  });
});



// Controller function to handle the retrieval of a single experience by ID.
 const getSingleExperience = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the experience by ID and get the result
  const result = await experienceServices.getExperienceById(id);
  // Send a success response with the retrieved resource data
   sendResponse(res, {
    message: 'Experience Retrieved Successfully',
    data: result,
  });
});


// Controller function to handle the retrieval of multiple experience.
 const getAllExperience = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple experience based on query parameters and get the result
  const result = await experienceServices.getAllExperience(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Experiences Retrieved Successfully',
    data: result,
  });
});


export const experienceControllers = {
  createExperience,
  getSingleExperience,
  getAllExperience,
}