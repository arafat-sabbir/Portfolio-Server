// Import the model
import deleteFile from '../../utils/deleteImage';
import { TPortfolio } from './portfolio.interface';
import PortfolioModel from './portfolio.model';

// Service function to create a new portfolio.
const createPortfolio = async (data: TPortfolio) => {
  const newPortfolio = await PortfolioModel.create(data);
  return newPortfolio;
};

// Service function to retrieve a single portfolio by ID.
const getPortfolioById = async (id: string) => {
  return await PortfolioModel.findById(id);
};

// Service function to retrieve multiple portfolio based on query parameters.
const getAllPortfolio = async (query: object) => {
  return await PortfolioModel.find(query);
};

const deletePortfolio = async (id: string) => {
  const portfolio = await PortfolioModel.findById(id);
  if (!portfolio) {
    throw new Error('Portfolio not found');
  }
  const thumbnail = portfolio?.thumbnail;
  if (thumbnail) {
    deleteFile(thumbnail);
  }
  return await PortfolioModel.findByIdAndDelete(id);
};

const updatePortfolio = async (id: string, payload: Partial<TPortfolio>) => {
  const portfolio = await PortfolioModel.findById(id);
  if (!portfolio) {
    throw new Error('Portfolio not found');
  }

  if (payload.thumbnail) {
    deleteFile(portfolio.thumbnail);
  }

  // Initialize updatedData as an empty object
  let updatedData: Partial<TPortfolio> = {};

  Object.keys(payload).forEach((key) => {
    // Ensure key is of type keyof TBlog and payload[key] is not undefined
    const typedKey = key as keyof TPortfolio;
    if (payload[typedKey] !== undefined) {
      updatedData = { ...updatedData, [typedKey]: payload[typedKey] };
    }
  });
  // Find and update the blog by ID
  const updatedPortfolio = await PortfolioModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  return updatedPortfolio;
};

export const portfolioServices = {
  createPortfolio,
  getPortfolioById,
  getAllPortfolio,
  deletePortfolio,
  updatePortfolio,
};

