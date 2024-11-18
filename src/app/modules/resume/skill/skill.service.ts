// Import the model
import { TSkill } from './skill.interface';
import SkillModel from './skill.model';

// Service function to create a new skill.
const createSkill = async (data: object) => {
  const newSkill = await SkillModel.create(data);
  return newSkill;
};

// Service function to retrieve a single skill by ID.
const getSkillById = async (id: string) => {
  return await SkillModel.findById(id);
};

// Service function to retrieve multiple skill based on query parameters.
const getAllSkill = async (query: object) => {
  return await SkillModel.find(query);
};

const editSkill = async (id: string, payload: Partial<TSkill>) => {
  // Initialize updatedData as an empty object
  const skill = await SkillModel.findById(id);
  if (!skill) {
    throw new Error('Skill not found');
  }
  let updatedData: Partial<TSkill> = {};
  Object.keys(payload).forEach((key) => {
    // Ensure key is of type keyof TSkill and payload[key] is not undefined
    const typedKey = key as keyof TSkill;
    if (payload[typedKey] !== undefined && payload[typedKey] !== null && payload[typedKey] !== '') {
      updatedData = { ...updatedData, [typedKey]: payload[typedKey] };
    }
  });
  const updatedSkill = await SkillModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return updatedSkill;
};

const deleteSkill = async (id: string) => {
  const skill = await SkillModel.findById(id);
  if (!skill) {
    throw new Error('Skill not found');
  }
  return await SkillModel.findByIdAndDelete(id);
};

export const skillServices = {
  createSkill,
  getSkillById,
  getAllSkill,
  editSkill,
  deleteSkill,
};
