import { Request, Response } from 'express';
import { socialServices } from './social.service';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

// Controller function to handle the creation of a single Social.
const createSocial = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new social and get the result
  const result = await socialServices.createSocial(req.body);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'New Social created Successfully',
    data: result,
  });
});

// Controller function to handle the retrieval of a single social by ID.
const getSingleSocial = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the social by ID and get the result
  const result = await socialServices.getSocialById(id);
  // Send a success response with the retrieved resource data
  sendResponse(res, {
    message: 'Social Retrieved Successfully',
    data: result,
  });
});

// Controller function to handle the retrieval of multiple social.
const getAllSocial = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple social based on query parameters and get the result
  const result = await socialServices.getAllSocial(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Socials Retrieved Successfully',
    data: result,
  });
});

const editSocial = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to update the social by ID and get the result
  const result = await socialServices.editSocial(req.body);
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: `${req.body.name} Url Updated Successfully`,
    data: result,
  });
});

export const socialControllers = {
  createSocial,
  getSingleSocial,
  getAllSocial,
  editSocial,
};

