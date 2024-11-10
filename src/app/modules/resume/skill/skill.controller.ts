import { Request, Response } from 'express';
import { skillServices } from './skill.service';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';

// Controller function to handle the creation of a single Skill.
const createSkill = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new skill and get the result
  const result = await skillServices.createSkill(req.body);
  // Send a success response with the created resource data
  sendResponse(res, {
    message: 'New Skill created Successfully',
    data: result,
  });
});

// Controller function to handle the retrieval of a single skill by ID.
const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the skill by ID and get the result
  const result = await skillServices.getSkillById(id);
  // Send a success response with the retrieved resource data
  sendResponse(res, {
    message: 'Skill Retrieved Successfully',
    data: result,
  });
});

// Controller function to handle the retrieval of multiple skill.
const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple skill based on query parameters and get the result
  const result = await skillServices.getAllSkill(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Skills Retrieved Successfully',
    data: result,
  });
});

const editSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to update the skill by ID and get the result
  const result = await skillServices.editSkill(id, req.body);
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: 'Skill Updated Successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to delete the skill by ID and get the result
  const result = await skillServices.deleteSkill(id);
  // Send a success response with the deleted resource data
  sendResponse(res, {
    message: 'Skill Deleted Successfully',
    data: result,
  });
});

export const skillControllers = {
  createSkill,
  getSingleSkill,
  getAllSkill,
  editSkill,
  deleteSkill,
};
