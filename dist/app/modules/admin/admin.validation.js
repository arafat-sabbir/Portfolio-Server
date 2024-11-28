"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidation = void 0;
const zod_1 = require("zod");
// Validation Schema For createAdmin
const createAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required',
        })
            .email({ message: 'Please Provide A Valid Email' }),
        password: zod_1.z
            .string({
            required_error: 'Password is required',
        })
            .min(6, { message: 'Password must be at least 6 characters long' }),
    }),
});
const editAdminSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z
            .string({
            required_error: 'Password is required',
        })
            .min(6, { message: 'Password must be at least 6 characters long' }),
    }),
});
const verifyOtpSchema = zod_1.z.object({
    body: zod_1.z.object({
        otp: zod_1.z
            .string({
            required_error: 'Otp is required',
        })
            .min(6, { message: 'Otp must be at least 6 characters long' }),
    }),
});
const forgotPasswordEmailSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'email is required',
        })
            .email({ message: 'Please Provide A Valid Email' }),
    }),
});
const forgotPasswordSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'email is required',
        })
            .email({ message: 'Please Provide A Valid Email' }),
        password: zod_1.z
            .string({
            required_error: 'Password is required',
        })
            .min(6, { message: 'Password must be at least 6 characters long' }),
        otp: zod_1.z
            .string({
            required_error: 'Otp is required',
        })
            .min(6, { message: 'Otp must be at least 6 characters long' }),
    }),
});
const verifyForgotOtp = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'email is required',
        })
            .email({ message: 'Please Provide A Valid Email' }),
        otp: zod_1.z
            .string({
            required_error: 'Otp is required',
        })
            .min(6, { message: 'Otp must be at least 6 characters long' }),
    }),
});
exports.adminValidation = {
    createAdminSchema,
    editAdminSchema,
    verifyOtpSchema,
    forgotPasswordEmailSchema,
    forgotPasswordSchema,
    verifyForgotOtp
};
