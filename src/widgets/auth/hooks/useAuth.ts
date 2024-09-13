import { useRouter } from 'next/navigation'
import { UseFormSetError, FieldValues } from 'react-hook-form'
import { postSignUp, postSignIn } from '@widgets/auth/api'
import type { AxiosResponse } from 'axios'
import type { AuthResponse, SignIn, SignUp } from '@shared/types'

export default function useAuth() {
  const router = useRouter()

  const handleAuth = async <T extends FieldValues>(
    authFunction: (
      data: T,
      setError: UseFormSetError<T>,
    ) => Promise<void | AxiosResponse<AuthResponse>>,
    data: T,
    setError: UseFormSetError<T>,
  ) => {
    try {
      await authFunction(data, setError)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const signUpSubmit = (setError: UseFormSetError<SignUp>) => {
    return async (data: SignUp) => {
      await handleAuth<SignUp>(postSignUp, data, setError)
    }
  }

  const signInSubmit = (setError: UseFormSetError<SignIn>) => {
    return async (data: SignIn) => {
      await handleAuth<SignIn>(postSignIn, data, setError)
    }
  }

  const logout = async () => {
    try {
      document.cookie =
        'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  return { signUpSubmit, signInSubmit, logout }
}
