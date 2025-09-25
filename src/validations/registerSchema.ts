import { z } from 'zod';

export const registerSchema = z.object({
  email: z
    .email({ message: 'Invalid email address' }),

  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),

  confirmPassword: z
    .string(),

  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' }),

  height: z
    .preprocess((val) => Number(val), z.number().positive({ message: 'Height must be a positive number' })),

  weight: z
    .preprocess((val) => Number(val), z.number().positive({ message: 'Weight must be a positive number' })),

  age: z
    .string()
    .min(1, { message: 'Age is required' })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 2, {
      message: 'Age must be a number and at least 2 years old',
    }),

}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

export type RegisterFormValues = z.infer<typeof registerSchema>;