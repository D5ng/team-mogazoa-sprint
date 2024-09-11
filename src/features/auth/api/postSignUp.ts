import axios from 'axios'
import axiosInstance from '@app/config/axios-instance'
import { postSignIn } from '@features/auth/api'
import type { UseFormSetError } from 'react-hook-form'
import type { SignUpFieldData } from '@features/auth/types/auth.type'

const url = 'auth/signUp'

export const postSignUp = async (
  data: SignUpFieldData,
  setError: UseFormSetError<SignUpFieldData>,
) => {
  try {
    await axiosInstance.post(url, data)

    await postSignIn({ email: data.email, password: data.password })
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      console.error(error)
      throw new Error('회원가입 중 예상치 못한 오류가 발생했습니다.')
    }

    const errorMessage = error.response?.data.message

    errorMessage === '이미 사용중인 이메일입니다.' &&
      setError('email', { message: errorMessage }, { shouldFocus: true })
    errorMessage === '이미 사용중인 닉네임입니다.' &&
      setError('nickname', { message: errorMessage }, { shouldFocus: true })
  }
}
