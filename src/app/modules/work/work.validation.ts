import { z } from "zod";

// Validation Schema For createWork
const createWorkSchema = z.object({
  body:z.object({

  })
})

export const workValidation = {
  createWorkSchema
}