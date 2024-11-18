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
import {
  blogData,
  clientData,
  educationData,
  experienceData,
  portfolioData,
  skillData,
  socialData,
  workData,
} from '../data/seed';

interface ModelData<T> {
  model: Model<T>;
  data: T[];
}

const models: ModelData<any>[] = [
  { model: ClientModel, data: clientData },
  { model: WorkModel, data: workData },
  { model: BlogModel, data: blogData },
  { model: PortfolioModel, data: portfolioData },
  { model: EducationModel, data: educationData },
  { model: ExperienceModel, data: experienceData },
  { model: SkillModel, data: skillData },
  { model: SocialModel, data: socialData },
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
