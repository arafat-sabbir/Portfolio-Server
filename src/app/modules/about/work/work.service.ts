// Import the model
import deleteFile from '../../../utils/deleteImage';
import { TWork } from './work.interface';
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

const editWork = async (id: string, payload: Partial<TWork>) => {
  const existingWork = await WorkModel.findById(id);
  if (!existingWork) {
    throw new Error('Work not found');
  }

  if (payload.photo) {
    deleteFile(existingWork.photo);
  }
  // Initialize updatedData as an empty object
  let updatedData: Partial<TWork> = {};

  Object.keys(payload).forEach((key) => {
    // Ensure key is of type keyof TBlog and payload[key] is not undefined
    const typedKey = key as keyof TWork;
    if (payload[typedKey] !== undefined) {
      updatedData = { ...updatedData, [typedKey]: payload[typedKey] };
    }
  });
  // Find and update the blog by ID
  const updatedWork = await WorkModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  return updatedWork;
};


const deleteWork = async (id: string) => {
  const existingWork = await WorkModel.findById(id);
  if (!existingWork) {
    throw new Error('Work not found');
  }
  if (existingWork.photo) {
    deleteFile(existingWork.photo);
  }
  const deletedWork = await WorkModel.findByIdAndDelete(id);
  return deletedWork;
};

export const workServices = {
  createWork,
  getWorkById,
  getAllWork,
  editWork,
  deleteWork
};

