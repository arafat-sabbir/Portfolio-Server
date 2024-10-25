import mongoose, { Schema } from 'mongoose';
import { TSkill } from './skill.interface';

// Define an interface representing a Skill document

// Define the Skill schema
const SkillSchema: Schema<TSkill> = new Schema(
  {
    skill: {
      type: String,
      required: [true, 'Skill name is required'],
      trim: true,
    },
    level: {
      type: Number,
      required: [true, 'Skill level is required'],
    },
  },
  { timestamps: true, versionKey: false }
);

// Create the Skill model
const SkillModel = mongoose.model<TSkill>('Skill', SkillSchema);

// Export the Skill model
export default SkillModel;
