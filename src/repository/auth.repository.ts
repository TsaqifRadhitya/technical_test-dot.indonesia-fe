import { baseRepository } from "./base.repository";

export class authRepository extends baseRepository {
    getCredential() {
        return this.getCookie("credential")
    }

    setCredential(credential: string) {
        return this.setCookie("credential", credential)
    }

    removeCredential() {
        this.removeCookie("credential")
        this.resetLocalStorage()
    }
}