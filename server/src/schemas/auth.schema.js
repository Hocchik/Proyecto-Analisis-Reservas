import {z} from 'zod';

export const registerSchema = z.object({

    Correo: z
        .string({
        required_error: "Email is required",
    })
    .email({
        message: "Invalid email",
    }),

    Contrasena: z
        .string({
            required_error: "Password is required"
        })
        .min(6, {
            message: "Password must be at least 6 charecters"
        })
});

export const loginSchema = z.object({
    Correo: z
    .string({
    required_error: "email is required",
    })
    .email({
        message: "Invalid email",
    }),
    
    Contrasena: z
    .string({
        required_error: "Password is required"
    })
    .min(6, {
        message: "Password must be at least 6 charecters"
    })
})

