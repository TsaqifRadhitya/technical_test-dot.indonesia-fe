export type notificationType = {
    message: string
    type: "error" | "info" | "warning" | "success"
}

export type notificationGlobalStateType = {
    notification?: notificationType
    isShowed: boolean
    setNotification: (data: notificationType) => void
    remove: () => void
    setShowed: () => void
}