import type { zodErrorType } from '@/types/zod-error';
import { authRepository } from '../repository/auth.repository';
import { loginValidator } from '@/validators/auth.validator';
import type z from 'zod';
export class authService {
    private authRepository = new authRepository()

    authCheck() {
        return !!this.authRepository.getCredential()
    }

    login(data: z.Infer<typeof loginValidator>): zodErrorType<typeof loginValidator> | undefined {
        const validate = loginValidator.safeParse(data)
        if (!validate.success) {
            const error = validate.error.format()
            return {
                username: error.username?._errors[0],
                password: error.password?._errors[0]    
            }
        }
        this.authRepository.setCredential(validate.data.username)
        return undefined
    }

    logout(): boolean {
        if (!this.authCheck()) {
            return false
        }
        this.authRepository.removeCredential()
        return true
    }
}