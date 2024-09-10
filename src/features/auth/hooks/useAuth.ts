import { useRouter } from 'next/router'
import { FieldValues, SubmitHandler } from 'react-hook-form'

import type { SignUpFieldData } from '@features/auth/types/auth.type'
import { postSignUp } from '@app/api'

export default function useAuth(setError) {
  const router = useRouter()

  const signUp = async (data: SignUpFieldData, setError: any) => {
    try {
      await postSignUp(data, setError)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await signUp(data, setError)
    } catch (error) {
      console.error(error)
    }
  }

  return { onSubmit }
}
