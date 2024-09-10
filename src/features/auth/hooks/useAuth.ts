import { UseFormSetError } from 'react-hook-form'
import { postSignUp, postSignIn } from '@/src/features/auth/api'
import type {
  SignUpFieldData,
  SignInFieldData,
} from '@features/auth/types/auth.type'

export default function useAuth() {
  const signUp = async (
    data: SignUpFieldData,
    setError: UseFormSetError<SignUpFieldData>,
  ) => {
    try {
      await postSignUp(data, setError)
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
