import z from "zod";

export const loginValidator = z.object({
    username: z.string().min(1, { message: "harap memasukkan username" }),
    password: z.string().min(8, { message: "password minimal 8 karakter" })
})