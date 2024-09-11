import { useRouter } from 'next/navigation'
import { UseFormSetError } from 'react-hook-form'
import { postSignUp, postSignIn } from '@/src/widgets/auth/api'
import type {
  SignUpFieldData,
  SignInFieldData,
} from '@/src/widgets/auth/types/auth.type'

export default function useAuth() {
  const router = useRouter()

  const signUp = async (
    data: SignUpFieldData,
    setError: UseFormSetError<SignUpFieldData>,
  ) => {
    try {
      await postSignUp(data, setError)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const signIn = async (
    data: SignInFieldData,
    setError: UseFormSetError<SignInFieldData>,
  ) => {
    try {
      await postSignIn(data, setError)
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }

  const signUpSubmit = (setError: UseFormSetError<SignUpFieldData>) => {
    return async (data: SignUpFieldData) => {
      await signUp(data, setError)
    }
  }

  const signInSubmit = (setError: UseFormSetError<SignInFieldData>) => {
    return async (data: SignInFieldData) => {
      await signIn(data, setError)
    }
  }

  return { signUpSubmit, signInSubmit }
}
