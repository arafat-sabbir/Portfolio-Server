// Import the model
import WorkModel from './work.model'; 

// Service function to create a new work.
const createWork = async (data: object) => {
  const newWork = await WorkModel.create(data);
  return newWork;
};


// Service function to retrieve a single work by ID.
const getWorkById = async (id: string) => {
  return await WorkModel.findById(id);
};

// Service function to retrieve multiple work based on query parameters.
const getAllWork = async (query: object) => {
  return await WorkModel.find(query);
};

export const workServices = {
  createWork,
  getWorkById,
  getAllWork,
};