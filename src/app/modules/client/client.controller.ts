import { Request, Response } from 'express';
import { clientServices } from './client.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';

// Controller function to handle the creation of a single Client.
const createClient = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to create a new client and get the result
  const result = await clientServices.createClient(req.body);
  // Send a success response with the created resource data
    sendResponse(res, {
    message: 'New Client created Successfully',
    data: result,
  });
});



// Controller function to handle the retrieval of a single client by ID.
 const getSingleClient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  // Call the service method to get the client by ID and get the result
  const result = await clientServices.getClientById(id);
  // Send a success response with the retrieved resource data
   sendResponse(res, {
    message: 'Client Retrieved Successfully',
    data: result,
  });
});


// Controller function to handle the retrieval of multiple client.
 const getAllClient = catchAsync(async (req: Request, res: Response) => {
  // Call the service method to get multiple client based on query parameters and get the result
  const result = await clientServices.getAllClient(req.query);
  // Send a success response with the retrieved resources data
  sendResponse(res, {
    message: 'Clients Retrieved Successfully',
    data: result,
  });
});


export const clientControllers = {
  createClient,
  getSingleClient,
  getAllClient,
}