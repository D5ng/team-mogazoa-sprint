import { UseFormSetError } from 'react-hook-form'
import { postSignUp, postSignIn } from '@app/api'
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

  return { signIn, signUp }
}
