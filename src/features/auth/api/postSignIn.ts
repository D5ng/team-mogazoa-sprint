import axios from 'axios'
import axiosInstance from '@app/config/axios-instance'
import type { UseFormSetError } from 'react-hook-form'
import type { SignInFieldData } from '@features/auth/types/auth.type'

const url = 'auth/signIn'

export const postSignIn = async (
  data: SignInFieldData,
  setError?: UseFormSetError<SignInFieldData>,
) => {
  try {
    const response = await axiosInstance.post(url, data)

    const accessToken = response.data.accessToken
    document.cookie = `accessToken=${accessToken}; path=/`

    return response
  } catch (error) {
    if (!axios.isAxiosError(error)) return

    const errorMessage = error.response?.data.message

    if (setError) {
      errorMessage &&
        setError(
          'email',
          { message: '이메일 혹은 비밀번호를 확인해주세요.' },
          { shouldFocus: true },
        )
    } else {
      console.error('setError가 정의되지 않았습니다.')
    }
  }
}
