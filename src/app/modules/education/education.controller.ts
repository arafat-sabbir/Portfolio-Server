import { Request, Response } from 'express';
import { educationServices } from './education.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single Education.
const createEducation = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new education and get the result
  const result = await educationServices.createEducation(req.body);
  // Send a success response with the created resource data
    sendResponse(res, {
    message: 'New Education created Successfully',
    data: result,
  });
});



// Controller function to handle the retrieval of a single education by ID.
 const getSingleEducation = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the education by ID and get the result
  const result = await educationServices.getEducationById(id);
  // Send a success response with the retrieved resource data
   sendResponse(res, {
    message: 'Education Retrieved Successfully',
    data: result,
  });
});


// Controller function to handle the retrieval of multiple education.
 const getAllEducation = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple education based on query parameters and get the result
  const result = await educationServices.getAllEducation(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Educations Retrieved Successfully',
    data: result,
  });
});


export const educationControllers = {
  createEducation,
  getSingleEducation,
  getAllEducation,
}