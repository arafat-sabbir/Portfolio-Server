import { Types } from 'mongoose';

export interface TPortfolio {
  title: string;
  category: string;
  description: string;
  technologiesUsed: string[]; // List of technologies
  features: string[]; // List of key features
  livePreview?: string; // URL to live project, optional
  sourceCode: string; // URL to source code
  thumbnail: string; // URL to a thumbnail image
  duration?: string; // Optional, e.g., "2 months"
  reviews: Types.ObjectId[]; // Array of reviews
  currentlyWorking?: boolean;
  startDate?: Date;
  endDate?: Date;
  // challengesAndSolutions?: string; // Optional
  // role: string;
  // futureEnhancements?: string[]; // List of planned features, optional
}

