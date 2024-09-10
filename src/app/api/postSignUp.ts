import axios from 'axios'
import type { SignUpFieldData } from '@features/auth/types/auth.type'
import axiosInstance from '@app/config/axios-instance'
import { UseFormSetError } from 'react-hook-form'
import { postSignIn } from '@app/api/postSignIn'

const url = 'auth/signUp'

export const postSignUp = async (
  data: SignUpFieldData,
  setError: UseFormSetError<SignUpFieldData>,
) => {
  const userData = {
    email: data.email,
    nickname: data.nickname,
    password: data.password,
    passwordConfirmation: data.passwordConfirmation,
  }

  try {
    await axiosInstance.post(url, userData)

    await postSignIn({ email: userData.email, password: userData.password })

    window.location.href = '/'
  } catch (error) {
    if (!axios.isAxiosError(error)) return

    const errorMessage = error.response?.data.message

    errorMessage === '이미 사용중인 이메일입니다.' &&
      setError('email', { message: errorMessage }, { shouldFocus: true })
    errorMessage === '이미 사용중인 닉네임입니다.' &&
      setError('nickname', { message: errorMessage }, { shouldFocus: true })
  }
}
