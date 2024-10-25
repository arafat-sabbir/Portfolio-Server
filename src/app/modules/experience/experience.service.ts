// Import the model
import ExperienceModel from './experience.model'; 

// Service function to create a new experience.
const createExperience = async (data: object) => {
  const newExperience = await ExperienceModel.create(data);
  return newExperience;
};


// Service function to retrieve a single experience by ID.
const getExperienceById = async (id: string) => {
  return await ExperienceModel.findById(id);
};

// Service function to retrieve multiple experience based on query parameters.
const getAllExperience = async (query: object) => {
  return await ExperienceModel.find(query);
};

export const experienceServices = {
  createExperience,
  getExperienceById,
  getAllExperience,
};