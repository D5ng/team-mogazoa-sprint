import { axiosInstance } from '@app/config'
import { SignUpFieldData } from '@app/types'

export type SignInRequest = 'email' | 'password'

export interface AuthUser {
  id: number
  email: string
  description: string
  image: string | null
  teamId: string
  nickname: string
  updatedAt: string
  createdAt: string
}

export interface AuthResponse {
  accessToken: string
  user: AuthUser
}

export const signUp = async (
  SignupRequest: SignUpFieldData,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    'auth/signUp',
    SignupRequest,
  )
  return response.data
}

export const signIn = async (
  SignInRequest: SignUpFieldData,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    'auth/signIn',
    SignInRequest,
  )
  return response.data
}
