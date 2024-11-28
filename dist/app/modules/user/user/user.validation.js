"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
// Create User Schema
const createUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Name Is Required',
        }),
        email: zod_1.z
            .string({
            required_error: 'Email Is Required',
        })
            .email({
            message: 'Invalid Email Address',
        }),
        password: zod_1.z
            .string({
            required_error: 'Password Is Required',
        })
            .min(6, 'Password Must Be At Least 6 Characters Long'),
    }),
});
// Login User Schema
const loginUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email Is Required',
        })
            .email({
            message: 'Invalid Email Address',
        }),
        password: zod_1.z
            .string({
            required_error: 'Password Is Required',
        })
            .min(6, 'Password Must Be At Least 6 Characters Long'),
    }),
});
const updateUserSchema = zod_1.z.object({
    body: zod_1.z
        .object({
        name: zod_1.z.string().optional(),
        email: zod_1.z
            .string({
            required_error: 'Email Is Required',
        })
            .email({
            message: 'Invalid Email Address',
        })
            .optional(),
        password: zod_1.z
            .string({
            required_error: 'Password Is Required',
        })
            .min(6, 'Password Must Be At Least 6 Characters Long')
            .optional(),
        photo: zod_1.z.string().optional(),
        designation: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        dob: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        displayEmail: zod_1.z.string().optional(),
        bio: zod_1.z.string().optional(),
        locationLink: zod_1.z.string().optional(),
    })
        .partial(),
});
exports.userValidation = {
    createUserSchema,
    loginUserSchema,
    updateUserSchema,
};
