import type z from "zod"
import type { loginValidator } from "../validators/auth.validator"
import type { zodErrorType } from "./zod-error"

export type globalStateAuth = {
    isAuth: boolean
    Logout: () => boolean
    Login: (data: z.infer<typeof loginValidator>) => zodErrorType<typeof loginValidator> | undefined
    Credential?: string
}