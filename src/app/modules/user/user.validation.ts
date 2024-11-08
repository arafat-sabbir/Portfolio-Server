import { z } from 'zod';

// Create User Schema
const createUserSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name Is Required',
    }),
    email: z
      .string({
        required_error: 'Email Is Required',
      })
      .email({
        message: 'Invalid Email Address',
      }),
    password: z
      .string({
        required_error: 'Password Is Required',
      })
      .min(6, 'Password Must Be At Least 6 Characters Long'),
  }),
});

// Login User Schema
const loginUserSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email Is Required',
      })
      .email({
        message: 'Invalid Email Address',
      }),
    password: z
      .string({
        required_error: 'Password Is Required',
      })
      .min(6, 'Password Must Be At Least 6 Characters Long'),
  }),
});

const updateUserSchema = z.object({
  body: z
    .object({
      name: z.string().optional(),
      email: z
        .string({
          required_error: 'Email Is Required',
        })
        .email({
          message: 'Invalid Email Address',
        })
        .optional(),
      password: z
        .string({
          required_error: 'Password Is Required',
        })
        .min(6, 'Password Must Be At Least 6 Characters Long')
        .optional(),
      photo: z.string().optional(),
      designation: z.string().optional(),
      location: z.string().optional(),
      dob: z.string().optional(),
      phone: z.string().optional(),
      displayEmail: z.string().optional(),
    })
    .partial(),
});

export const userValidation = {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
};
