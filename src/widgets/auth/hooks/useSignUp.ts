import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { setCookie } from 'cookies-next'
import { isAxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { signUp } from '@shared/api'
import type { UseFormSetError } from 'react-hook-form'
import type { SignUp } from '@shared/types'

export default function useSignUp(setError: UseFormSetError<SignUp>) {
  const router = useRouter()

  return useMutation({
    mutationFn: signUp,
    onSuccess: (result) => {
      setCookie('auth', result)
      router.push('/')
      toast.success('회원가입이 완료되었습니다.')
    },
    onError: (error) => {
      if (isAxiosError(error) && error.response?.data?.details) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof SignUp
        const errorMessage = error.response.data.details[field]?.message
        setError(field, { message: errorMessage })
        toast.error(errorMessage)
      } else {
        const errorMessage = '알 수 없는 에러가 발생했습니다.'
        setError('root', { message: errorMessage })
        toast.error(errorMessage)
      }
    },
  })
}
