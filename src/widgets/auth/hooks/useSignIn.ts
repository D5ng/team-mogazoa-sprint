import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { setCookie } from 'cookies-next'
import { isAxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@shared/api'
import type { UseFormSetError } from 'react-hook-form'
import type { SignIn } from '@shared/types'

export default function useSignIn(setError: UseFormSetError<SignIn>) {
  const router = useRouter()

  return useMutation({
    mutationFn: signIn,
    onSuccess: (result) => {
      setCookie('auth', JSON.stringify(result))
      router.push('/')
      toast.success('로그인이 완료되었습니다.')
    },
    onError: (error) => {
      if (isAxiosError(error) && error.response?.data?.details) {
        const field = Object.keys(
          error.response.data.details,
        )[0] as keyof SignIn
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
