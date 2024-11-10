// Import the model
import { TEducation } from './education.interface';
import EducationModel from './education.model';

// Service function to create a new education.
const createEducation = async (data: object) => {
  const newEducation = await EducationModel.create(data);
  return newEducation;
};

// Service function to retrieve a single education by ID.
const getEducationById = async (id: string) => {
  return await EducationModel.findById(id);
};

// Service function to retrieve multiple education based on query parameters.
const getAllEducation = async (query: object) => {
  return await EducationModel.find(query);
};


const editEducation = async (id: string, payload: Partial<TEducation>) => {
  // Initialize updatedData as an empty object
  let updatedData: Partial<TEducation> = {};

  Object.keys(payload).forEach((key) => {
    // Ensure key is of type keyof TExperience and payload[key] is not undefined
    const typedKey = key as keyof TEducation;
    if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
      updatedData = { ...updatedData, [typedKey]: payload[typedKey] };
    }
  });
  const updatedEducation = await EducationModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedEducation;
};


const deleteEducation = async (id: string) => {
  const education = await EducationModel.findById(id);
  if (!education) {
    throw new Error('Education not found');
  }
  return await EducationModel.findByIdAndDelete(id);
};

export const educationServices = {
  createEducation,
  getEducationById,
  getAllEducation,
  editEducation,
  deleteEducation
};
