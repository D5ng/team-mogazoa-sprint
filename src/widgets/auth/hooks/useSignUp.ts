import { useRouter } from 'next/navigation'
import type { UseFormSetError } from 'react-hook-form'
import { isAxiosError } from 'axios'
import { setCookie } from 'cookies-next'
import type { SignUp } from '@shared/types'
import { signUp } from '@shared/api'

export default function useSignUp(setError: UseFormSetError<SignUp>) {
  const router = useRouter()

  return async (data: SignUp) => {
    try {
      const result = await signUp(data)
      setCookie('auth', result)
      router.push('/')
    } catch (error) {
      if (isAxiosError(error) && error.response?.data?.details) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof SignUp
        const errorMessage = error.response.data.details[field]?.message
        setError(field, { message: errorMessage })
      }
      setError('root', { message: '알 수 없는 에러가 발생했습니다.' })
    }
  }
}
