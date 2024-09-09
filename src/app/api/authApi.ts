import { axiosInstance } from '@app/config'
import { AuthResponse, SignUpFieldData } from '@features/auth/types/auth.type'

export const signUp = async (
  signUpRequest: SignUpFieldData,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    'auth/signUp',
    signUpRequest,
  )
  return response.data
}

export const signIn = async (
  signInRequest: SignUpFieldData,
): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>(
    'auth/signIn',
    signInRequest,
  )
  return response.data
}
