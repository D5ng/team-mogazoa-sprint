import axiosInstance from '@app/config/axios-instance'
import type { AuthResponse, SignIn, SignUp, SocialSignUp } from '@shared/types'

export async function signUp(data: SignUp) {
  return (await axiosInstance.post<AuthResponse>(`/auth/signUp`, data)).data
}

export async function signIn(data: SignIn) {
  return (await axiosInstance.post<AuthResponse>(`/auth/signIn`, data)).data
}

export async function socialSignUp({ social, ...data }: SocialSignUp) {
  return (
    await axiosInstance.post<AuthResponse>(`/auth/signUp/${social}`, data)
  ).data
}

export async function socialSignIn({ social, ...data }: SocialSignUp) {
  return (
    await axiosInstance.post<AuthResponse>(`/auth/signUp/${social}`, data)
  ).data
}
