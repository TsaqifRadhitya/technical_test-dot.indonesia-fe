import { create } from "zustand"
import type { notificationGlobalStateType } from "../types/notification"

export const useNotification = create<notificationGlobalStateType>((set) => {
    return {
        isShowed: false,
        remove() {
            set({ notification: undefined, isShowed: false })
        },
        setNotification(data) {
            set({ notification: data })
        },
        setShowed() {
            set({ isShowed: true })
        },
        notification: undefined,
    }
})