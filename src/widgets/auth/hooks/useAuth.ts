import { useRouter } from 'next/navigation'
import { signUp, signIn } from '@shared/api'
import { processAuth } from '@widgets/auth/api/auth.api'
import type { UseFormSetError } from 'react-hook-form'
import type { SignUp, SignIn, User } from '@shared/types'
import useAuthStore from '@/src/app/provider/authStore'

export default function useAuth() {
  const router = useRouter()

  const storeToken = (accessToken: string, user: User) => {
    document.cookie = `accessToken=${accessToken}; path=/`
    useAuthStore.getState().setUser(user)
    router.push('/')
  }

  const signUpSubmit =
    (setError: UseFormSetError<SignUp>) => async (data: SignUp) => {
      const signUpAndSignIn = async (signUpData: SignUp) => {
        await signUp(signUpData)
        const { email, password } = signUpData
        return signIn({ email, password })
      }

      await processAuth(signUpAndSignIn, data, setError, storeToken)
    }

  const signInSubmit =
    (setError: UseFormSetError<SignIn>) => async (data: SignIn) => {
      await processAuth(signIn, data, setError, storeToken)
    }

  const logout = () => {
    document.cookie =
      'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    useAuthStore.getState().setUser(undefined as unknown as User)
    router.push('/')
  }

  return { signUpSubmit, signInSubmit, logout }
}
