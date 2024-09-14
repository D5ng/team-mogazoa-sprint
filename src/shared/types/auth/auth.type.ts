import { UseFormSetError, FieldValues } from 'react-hook-form'

export interface NicknameFieldData {
  nickname: string
}

export interface User {
  updatedAt: string
  createdAt: string
  teamId: string
  image: string
  description: string
  nickname: string
  id: number
  email: string
}

export interface SignUp {
  email: string
  nickname: string
  password: string
  passwordConfirmation: string
}

export interface SignIn extends Pick<SignUp, 'email' | 'password'> {}

export type Social = 'google' | 'kakao'

export interface SocialSignUp {
  social: Social
  nickname: string
  redirectUri: string | undefined
  token: string
}

export interface SocialSignIn
  extends Pick<SocialSignUp, 'redirectUri' | 'token' | 'social'> {}

export interface AuthResponse {
  accessToken: string
  user: User
}

export type AuthFunction<T extends FieldValues> = (
  data: T,
  setError?: UseFormSetError<T>,
) => Promise<AuthResponse | void | undefined>
