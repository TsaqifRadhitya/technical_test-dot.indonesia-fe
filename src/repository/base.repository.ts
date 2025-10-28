import Cookies from "js-cookie"

export class baseRepository {
    protected getCookie = (key: string) => {
        return Cookies.get(key)
    }

    protected removeCookie = (key: string, option?: Cookies.CookieAttributes) => {
        return Cookies.remove(key, option)
    }

    protected setCookie = (key: string, value: string, option?: Cookies.CookieAttributes): boolean => {
        return !!Cookies.set(key, value, option)
    }

    protected setLocalStorage(key: string, value: string) {
        localStorage.setItem(key, value)
    }

    protected removeLocalStorage(key: string) {
        localStorage.removeItem(key)
    }

    protected getLocalStorage(key: string) {
        return localStorage.getItem(key)
    }

    protected checkLocalStorage(key: string) {
        return!!this.getLocalStorage(key)
    }

    protected resetLocalStorage() {
        localStorage.clear()
    }
}