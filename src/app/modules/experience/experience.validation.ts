import { z } from "zod";

// Validation Schema For createExperience
const createExperienceSchema = z.object({
  body:z.object({

  })
})

export const experienceValidation = {
  createExperienceSchema
}