import { z } from 'zod';

// Validation Schema For createAdmin
const createAdminSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({ message: 'Please Provide A Valid Email' }),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, { message: 'Password must be at least 6 characters long' }),
  }),
});

const editAdminSchema = z.object({
  body: z.object({
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, { message: 'Password must be at least 6 characters long' }),
  }),
});

const verifyOtpSchema = z.object({
  body: z.object({
    otp: z
      .string({
        required_error: 'Otp is required',
      })
      .min(6, { message: 'Otp must be at least 6 characters long' }),
  }),
});

const forgotPasswordEmailSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .email({ message: 'Please Provide A Valid Email' }),
  }),
});

const forgotPasswordSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .email({ message: 'Please Provide A Valid Email' }),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(6, { message: 'Password must be at least 6 characters long' }),
    otp: z
      .string({
        required_error: 'Otp is required',
      })
      .min(6, { message: 'Otp must be at least 6 characters long' }),
  }),
});


const verifyForgotOtp = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'email is required',
      })
      .email({ message: 'Please Provide A Valid Email' }),
      otp: z
      .string({
        required_error: 'Otp is required',
      })
      .min(6, { message: 'Otp must be at least 6 characters long' }),
  }),
});

export const adminValidation = {
  createAdminSchema,
  editAdminSchema,
  verifyOtpSchema,
  forgotPasswordEmailSchema,
  forgotPasswordSchema,
  verifyForgotOtp
};

