// Import the model
import CategoriesModel from './categories.model';

// Service function to create a new categories.
const createCategories = async (data: any) => {
  // Check if a category exists in the database
  const portfolioCategoriesExist = await CategoriesModel.findOne();

  if (portfolioCategoriesExist) {
    // Update the existing document to include the new category
    await CategoriesModel.updateOne(
      { _id: portfolioCategoriesExist._id }, // Locate the document
      { $addToSet: { portfolioCategories: data.category } } // Avoid duplicates using $addToSet
    );
    return portfolioCategoriesExist; // Return the updated existing document
  } else {
    // Create a new document with the category
    const newCategories = await CategoriesModel.create({
      portfolioCategories: [data.category],
    });
    return newCategories; // Return the newly created document
  }
};

// Service function to retrieve a single categories by ID.
const getCategoriesById = async (id: string) => {
  return await CategoriesModel.findById(id);
};

// Service function to retrieve multiple categories based on query parameters.
const getAllCategories = async (query: object) => {
  return await CategoriesModel.findOne(query);
};

export const categoriesServices = {
  createCategories,
  getCategoriesById,
  getAllCategories,
};

