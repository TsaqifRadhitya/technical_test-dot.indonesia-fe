import type z from "zod";

export type zodErrorType<T> = {
    [k in keyof z.infer<T>]: string | undefined
}