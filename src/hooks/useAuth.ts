import { create } from "zustand"
import type { globalStateAuth } from "../types/auth"
import type z from "zod"
import { loginValidator } from "../validators/auth.validator"
import type { zodErrorType } from "../types/zod-error"
import { getCookie, setCookie, removeCookie } from "../utils/cookie"
import { useQuestion } from "./useQuestion"

export const useAuth = create<globalStateAuth>((set) => {
    const LoginValidate = (data: z.infer<typeof loginValidator>): zodErrorType<typeof loginValidator> | undefined => {
        const validate = loginValidator.safeParse(data)
        if (!validate.success) {
            const error = validate.error.format()
            return {
                password: error.password?._errors[0],
                username: error.username?._errors[0]
            }
        }
        setCookie("credential", validate.data.username)
        return undefined
    }
    const { reset } = useQuestion()
    return {
        isAuth: !!getCookie("credential"),
        Login: (data) => {
            const validate = LoginValidate(data)
            if (validate) return validate
            set((prev) => ({
                ...prev,
                isAuth: true,
                Credential: data.username
            }))
        },
        Logout: () => {
            const authCheck = !!getCookie("credential")
            if (!authCheck) return false
            removeCookie("credential")
            set((prev) => ({ ...prev, isAuth: false, Credential: undefined }))

            reset()
            return true
        },
        Credential: getCookie("credential")
    }
})
