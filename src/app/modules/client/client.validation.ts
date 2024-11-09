import { z } from "zod";

// Validation Schema For createClient
const createClientSchema = z.object({
  body:z.object({

  })
})

export const clientValidation = {
  createClientSchema
}