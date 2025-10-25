import { create } from "zustand"
import type { globalStateAuth } from "../types/auth"
import { getCookie, removeCookie } from "../utils/cookie"
import { authService } from "@/services/auth.service"

export const useAuth = create<globalStateAuth>((set) => {
    const AuthService = new authService()
    return {
        isAuth: !!getCookie("credential"),
        Login: (data) => {
            const validate = AuthService.login(data)
            if (validate) return validate
            set((prev) => ({
                ...prev,
                isAuth: true,
                Credential: data.username
            }))
        },
        Logout: () => {
            const authCheck = AuthService.logout()
            if (!authCheck) return false
            removeCookie("credential")
            set((prev) => ({ ...prev, isAuth: false, Credential: undefined }))
            return true
        },
        Credential: getCookie("credential")
    }
})
