// Import the model

import deleteFile from '../../../utils/deleteImage';
import { TClient } from './client.interface';
import ClientModel from './client.model';

// Service function to create a new client.
const createClient = async (data: object) => {
  const newClient = await ClientModel.create(data);
  return newClient;
};

// Service function to retrieve a single client by ID.
const getClientById = async (id: string) => {
  return await ClientModel.findById(id);
};

// Service function to retrieve multiple client based on query parameters.
const getAllClient = async (query: object) => {
  return await ClientModel.find(query);
};

const updateClient = async (id: string, payload: TClient) => {
  const existingClient = await ClientModel.findById(id);
  if (!existingClient) {
    throw new Error('Client not found');
  }
  if (existingClient.photo) {
    deleteFile(existingClient.photo);
  }
  const updatedClient = await ClientModel.findByIdAndUpdate(
    id,
    { photo: payload.photo },
    {
      new: true,
    }
  );
  return updatedClient;
};

const deleteClient = async (id: string) => {
  const client = await ClientModel.findById(id);
  if (!client) {
    throw new Error('Client not found');
  }
  if (client.photo) {
    deleteFile(client.photo);
  }
  return await ClientModel.findByIdAndDelete(id);
};

export const clientServices = {
  createClient,
  getClientById,
  getAllClient,
  updateClient,
  deleteClient
};

