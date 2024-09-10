import { useRouter } from 'next/router'
import { useState } from 'react'
import { UseFormSetError } from 'react-hook-form'
import { AxiosError } from 'axios'
import type {
  SignUpFieldData,
  AuthResponse,
} from '@features/auth/types/auth.type'

const DEFAULT_ERROR_MESSAGE =
  '회원가입 중 오류가 발생했습니다. 다시 시도해 주세요.'

export const useSignUp = (
  signUpFunction: (data: SignUpFieldData) => Promise<AuthResponse>,
  setError: UseFormSetError<SignUpFieldData>,
) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: SignUpFieldData) => {
    setIsLoading(true)
    try {
      await signUpFunction(data)
      router.push('/signIn')
    } catch (err) {
      if (err instanceof AxiosError && err.response?.data?.message) {
        setError('root', {
          type: 'manual',
          message: err.response.data.message,
        })
      } else {
        setError('root', { type: 'manual', message: DEFAULT_ERROR_MESSAGE })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { onSubmit, isLoading }
}
