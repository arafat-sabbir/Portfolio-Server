import { z } from "zod";

// Validation Schema For createEducation
const createEducationSchema = z.object({
  body:z.object({

  })
})

export const educationValidation = {
  createEducationSchema
}