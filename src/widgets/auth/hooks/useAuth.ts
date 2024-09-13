import { useRouter } from 'next/navigation'
import { UseFormSetError, FieldValues } from 'react-hook-form'
import { postSignUp, postSignIn } from '@widgets/auth/api'
import type { AuthFunction, SignIn, SignUp } from '@shared/types'

export default function useAuth() {
  const router = useRouter()

  const handleAuth = async <T extends FieldValues>(
    authFunction: AuthFunction<T>,
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
      await handleAuth<SignUp>(
        (data, setError) =>
          postSignUp(data, setError as UseFormSetError<SignUp>),
        data,
        setError,
      )
    }
  }

  const signInSubmit = (setError: UseFormSetError<SignIn>) => {
    return async (data: SignIn) => {
      await handleAuth<SignIn>(
        (data, setError) =>
          postSignIn(data, setError as UseFormSetError<SignIn>),
        data,
        setError,
      )
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
