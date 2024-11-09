// Import the model
import ClientModel from './client.model'; 

// Service function to create a new client.
const createClient = async (data: object) => {
  const newClient = await ClientModel.create(data);
  return newClient;
};


// Service function to retrieve a single client by ID.
const getClientById = async (id: string) => {
  return await ClientModel.findById(id);
};

// Service function to retrieve multiple client based on query parameters.
const getAllClient = async (query: object) => {
  return await ClientModel.find(query);
};

export const clientServices = {
  createClient,
  getClientById,
  getAllClient,
};