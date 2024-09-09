import { useState } from 'react'
import { UseFormSetError } from 'react-hook-form'
import { AxiosError, isAxiosError } from 'axios'
import type {
  SignUpFieldData,
  AuthResponse,
  AuthServerError,
} from '@features/auth/types/auth.type'

const DEFAULT_ERROR_MESSAGE = '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'

export const useSignUp = (
  signUpFunction: (data: SignUpFieldData) => Promise<AuthResponse>,
  setError: UseFormSetError<SignUpFieldData>,
) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleAxiosError = (error: AxiosError<AuthServerError>) => {
    const details = error.response?.data?.details
    if (details) {
      const field = Object.keys(details)[0] as keyof SignUpFieldData
      const fieldError = details[field]
      if (fieldError) {
        setError(field, {
          type: 'manual',
          message: fieldError.message,
        })
      }
    } else {
      setError('root', {
        type: 'manual',
        message: error.response?.data?.message || DEFAULT_ERROR_MESSAGE,
      })
    }
  }

  const onSubmit = async (data: SignUpFieldData) => {
    setIsLoading(true)
    try {
      await signUpFunction(data)
      console.log('회원가입 성공')
    } catch (err) {
      if (isAxiosError(err)) {
        handleAxiosError(err as AxiosError<AuthServerError>)
      } else {
        console.error(err)
        setError('root', {
          type: 'manual',
          message: DEFAULT_ERROR_MESSAGE,
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return { onSubmit, isLoading }
}
