/* eslint-disable @typescript-eslint/no-explicit-any */
// src/seeders/seed.ts

import { Model } from 'mongoose';
import ClientModel from '../modules/about/client/client.model';
import WorkModel from '../modules/about/work/work.model';
import BlogModel from '../modules/blog/blog.model';
import PortfolioModel from '../modules/portfolio/portfolio.model';
import EducationModel from '../modules/resume/education/education.model';
import ExperienceModel from '../modules/resume/experience/experience.model';
import SkillModel from '../modules/resume/skill/skill.model';
import SocialModel from '../modules/user/social/social.model';
import UserModel from '../modules/user/user/user.model';

interface ModelData<T> {
  model: Model<T>;
  data: T[];
}

const models: ModelData<any>[] = [
  { model: ClientModel, data: [] },
  { model: WorkModel, data: [] },
  { model: BlogModel, data: [] },
  { model: PortfolioModel, data: [] },
  { model: EducationModel, data: [] },
  { model: ExperienceModel, data: [] },
  { model: SkillModel, data: [] },
  { model: SocialModel, data: [] },
  { model: UserModel, data: [] },
];

export const seedDatabase = async () => {
  try {
    console.log('Checking and seeding default data...');

    for (const { model, data } of models) {
      const dataExists = await model.countDocuments();
      if (dataExists === 0) {
        await model.insertMany(data);
        console.log(`${model.modelName} seeded`);
      }
    }
  } catch (error) {
    console.error('Error during database seeding:', error);
  }
};
