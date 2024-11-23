import { Request, Response } from 'express';
import { categoriesServices } from './categories.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single Categories.
const createCategories = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new categories and get the result
  const result = await categoriesServices.createCategories(req.body);
  // Send a success response with the created resource data
    sendResponse(res, {
    message: 'New Categories created Successfully',
    data: result,
  });
});



// Controller function to handle the retrieval of a single categories by ID.
 const getSingleCategories = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the categories by ID and get the result
  const result = await categoriesServices.getCategoriesById(id);
  // Send a success response with the retrieved resource data
   sendResponse(res, {
    message: 'Categories Retrieved Successfully',
    data: result,
  });
});


// Controller function to handle the retrieval of multiple categories.
 const getAllCategories = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple categories based on query parameters and get the result
  const result = await categoriesServices.getAllCategories(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Categoriess Retrieved Successfully',
    data: result,
  });
});


export const categoriesControllers = {
  createCategories,
  getSingleCategories,
  getAllCategories,
}