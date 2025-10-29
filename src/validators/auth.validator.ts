import z from "zod";

export const loginValidator = z.object({
    username: z.string().min(1, { message: "harap memasukkan username" }),
    password: z
        .string()
        .min(8, { message: "password minimal 8 karakter" })
        .regex(/[A-Z]/, { message: "password harus mengandung huruf kapital" })
        .regex(/[a-z]/, { message: "password harus mengandung huruf kecil" })
        .regex(/[0-9]/, { message: "password harus mengandung angka" })
        .regex(/[^A-Za-z0-9]/, { message: "password harus mengandung simbol" }),
});
