import { axiosInstance } from '@shared/config'
import type {
  AuthResponse,
  SignIn,
  SignUp,
  SocialSignIn,
  SocialSignUp,
} from '@shared/types'

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

export async function socialSignIn({ social, ...data }: SocialSignIn) {
  return (
    await axiosInstance.post<AuthResponse>(`/auth/signIn/${social}`, data)
  ).data
}
