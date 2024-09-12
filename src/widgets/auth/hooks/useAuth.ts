import { useRouter } from 'next/navigation'
import { UseFormSetError } from 'react-hook-form'
import { postSignUp, postSignIn } from '@widgets/auth/api'
import type { SignIn, SignUp } from '@shared/types/auth/auth.type'

export default function useAuth() {
  const router = useRouter()

  const signUp = async (data: SignUp, setError: UseFormSetError<SignUp>) => {
    try {
      await postSignUp(data, setError)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const signIn = async (data: SignIn, setError: UseFormSetError<SignIn>) => {
    try {
      await postSignIn(data, setError)
      router.push('/')
    } catch (error) {
      console.error(error)
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

  const signUpSubmit = (setError: UseFormSetError<SignUp>) => {
    return async (data: SignUp) => {
      await signUp(data, setError)
    }
  }

  const signInSubmit = (setError: UseFormSetError<SignIn>) => {
    return async (data: SignIn) => {
      await signIn(data, setError)
    }
  }

  return { signUpSubmit, signInSubmit, logout }
}
