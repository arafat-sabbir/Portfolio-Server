// Import the model
import { TExperience } from './experience.interface';
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

const editExperience = async (id: string, payload: Partial<TExperience>) => {
  // Initialize updatedData as an empty object
  let updatedData: Partial<TExperience> = {};

  Object.keys(payload).forEach((key) => {
    // Ensure key is of type keyof TExperience and payload[key] is not undefined
    const typedKey = key as keyof TExperience;
    if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
      updatedData = { ...updatedData, [typedKey]: payload[typedKey] };
    }
  });
  const updatedExperience = await ExperienceModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedExperience;
};

const deleteExperience = async (id: string) => {
  const experience = await ExperienceModel.findById(id);
  if (!experience) {
    throw new Error('Experience not found');
  }
  return await ExperienceModel.findByIdAndDelete(id);
};


export const experienceServices = {
  createExperience,
  getExperienceById,
  getAllExperience,
  editExperience,
  deleteExperience
};

