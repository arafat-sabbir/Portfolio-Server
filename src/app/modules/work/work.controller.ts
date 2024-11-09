import { Request, Response } from 'express';
import { workServices } from './work.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single Work.
const createWork = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new work and get the result
  const result = await workServices.createWork(req.body);
  // Send a success response with the created resource data
    sendResponse(res, {
    message: 'New Work created Successfully',
    data: result,
  });
});



// Controller function to handle the retrieval of a single work by ID.
 const getSingleWork = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the work by ID and get the result
  const result = await workServices.getWorkById(id);
  // Send a success response with the retrieved resource data
   sendResponse(res, {
    message: 'Work Retrieved Successfully',
    data: result,
  });
});


// Controller function to handle the retrieval of multiple work.
 const getAllWork = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple work based on query parameters and get the result
  const result = await workServices.getAllWork(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Works Retrieved Successfully',
    data: result,
  });
});


export const workControllers = {
  createWork,
  getSingleWork,
  getAllWork,
}