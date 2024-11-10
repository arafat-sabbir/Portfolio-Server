import EducationModel from './education/education.model';
import ExperienceModel from './experience/experience.model';
import SkillModel from './skill/skill.model';

const getResumeContent = async () => {
  const skills = (await SkillModel.find()) || [];
  const educations = (await EducationModel.find()) || [];
  const experiences = (await ExperienceModel.find()) || [];
  return { skills, educations, experiences };
};

export const resumeServices = {
  getResumeContent,
};
