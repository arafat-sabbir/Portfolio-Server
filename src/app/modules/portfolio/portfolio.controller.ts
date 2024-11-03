import { Request, Response } from 'express';
import { portfolioServices } from './portfolio.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single Portfolio.
const createPortfolio = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new portfolio and get the result
  const result = await portfolioServices.createPortfolio(req.body);
  // Send a success response with the created resource data
    sendResponse(res, {
    message: 'New Portfolio created Successfully',
    data: result,
  });
});



// Controller function to handle the retrieval of a single portfolio by ID.
 const getSinglePortfolio = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the portfolio by ID and get the result
  const result = await portfolioServices.getPortfolioById(id);
  // Send a success response with the retrieved resource data
   sendResponse(res, {
    message: 'Portfolio Retrieved Successfully',
    data: result,
  });
});


// Controller function to handle the retrieval of multiple portfolio.
 const getAllPortfolio = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple portfolio based on query parameters and get the result
  const result = await portfolioServices.getAllPortfolio(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Portfolios Retrieved Successfully',
    data: result,
  });
});


const deletePortfolio = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to delete the portfolio by ID and get the result
  const result = await portfolioServices.deletePortfolio(id);
  // Send a success response with the deleted resource data
  sendResponse(res, {
    message: 'Portfolio Deleted Successfully',
    data: result,
  });
});


const updatePortfolio = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to update the portfolio by ID and get the result
  const result = await portfolioServices.updatePortfolio(id, req.body);
  // Send a success response with the updated resource data
  sendResponse(res, {
    message: 'Portfolio Updated Successfully',
    data: result,
  });
}) 

export const portfolioControllers = {
  createPortfolio,
  getSinglePortfolio,
  getAllPortfolio,
  deletePortfolio,
  updatePortfolio
}