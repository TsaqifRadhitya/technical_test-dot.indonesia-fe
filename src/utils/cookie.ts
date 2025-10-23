import Cookies from "js-cookie";

export const getCookie = (key: string) => {
    return Cookies.get(key)
}

export const removeCookie = (key: string, option?: Cookies.CookieAttributes) => {
    return Cookies.remove(key, option)
}

export const setCookie = (key: string, value: any, option?: Cookies.CookieAttributes): boolean => {
    return !!Cookies.set(key, String(value), option)
}