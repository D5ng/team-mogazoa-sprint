import axios from 'axios'
import axiosInstance from '@shared/config/axios-instance'
import useAuthStore from '@shared/store/authStore'
import type { UseFormSetError } from 'react-hook-form'
import type { SignIn } from '@shared/types/auth/auth.type'

const url = 'auth/signIn'

export const postSignIn = async (
  data: SignIn,
  setError?: UseFormSetError<SignIn>,
) => {
  try {
    const response = await axiosInstance.post(url, data)

    const accessToken = response.data.accessToken
    const user = response.data.user
    document.cookie = `accessToken=${accessToken}; path=/`

    const setUser = useAuthStore.getState().setUser
    setUser(user)

    return response
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      console.error(error)
      throw new Error('로그인 중 예상치 못한 오류가 발생했습니다.')
    }

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
