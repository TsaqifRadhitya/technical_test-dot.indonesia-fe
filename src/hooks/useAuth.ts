import { create } from "zustand"
import type { globalStateAuth } from "../types/auth"
import { getCookie, removeCookie } from "../utils/cookie"
import { authService } from "@/services/auth.service"

export const useAuth = create<globalStateAuth>((set) => {
    const AuthService = new authService()
    return {
        isAuth: !!getCookie("credential"),
        Login: async (data) => {
            const validate = AuthService.login(data)
            await new Promise((resove) => setTimeout(() => resove(undefined), 600))
            if (validate) return validate
            await new Promise((resove) => setTimeout(() => resove(undefined), 400))
            set((prev) => ({
                ...prev,
                isAuth: true,
                Credential: data.username
            }))
        },
        Logout: async () => {
            const authCheck = AuthService.logout()
            await new Promise((resove) => setTimeout(() => resove(undefined), 600))
            if (!authCheck) return false
            removeCookie("credential")
            set((prev) => ({ ...prev, isAuth: false, Credential: undefined }))
            return true
        },
        Credential: getCookie("credential")
    }
})
