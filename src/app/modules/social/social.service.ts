// Import the model
import { TSocial } from './social.interface';
import SocialModel from './social.model';

// Service function to create a new social.
const createSocial = async (data: object) => {
  const newSocial = await SocialModel.create(data);
  return newSocial;
};

// Service function to retrieve a single social by ID.
const getSocialById = async (id: string) => {
  return await SocialModel.findById(id);
};

// Service function to retrieve multiple social based on query parameters.
const getAllSocial = async (query: object) => {
  return await SocialModel.find(query);
};

const editSocial = async (payload: TSocial) => {
  return await SocialModel.findOneAndUpdate({ name: payload.name }, payload, { new: true });
};

export const socialServices = {
  createSocial,
  getSocialById,
  getAllSocial,
  editSocial,
};

