// Import the model
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

export const educationServices = {
  createEducation,
  getEducationById,
  getAllEducation,
};