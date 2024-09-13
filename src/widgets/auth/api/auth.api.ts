import { isAxiosError } from 'axios'
import type { UseFormSetError, FieldPath } from 'react-hook-form'
import type { AuthResponse, SignIn, SignUp, User } from '@shared/types'

export const processAuth = async <T extends SignUp | SignIn>(
  authFunction: (data: T) => Promise<AuthResponse>,
  data: T,
  setError: UseFormSetError<T>,
  getToken: (accessToken: string, user: User) => void,
) => {
  try {
    const { accessToken, user } = await authFunction(data)
    getToken(accessToken, user)
  } catch (error) {
    if (isAxiosError(error) && error.response?.data?.details) {
      const field = Object.keys(error.response.data.details)[0]
      const errorMessage = error.response.data.details[field]?.message
      setError(field as FieldPath<T>, { message: errorMessage })
    }
    setError('root', { message: '알 수 없는 에러가 발생했습니다.' })
  }
}
