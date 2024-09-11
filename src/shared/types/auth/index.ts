export interface AuthResponse {
  accessToken: string
  user: User
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
  redirectUri: string
  token: string
}

export interface SocialSignIn
  extends Pick<SocialSignUp, 'redirectUri' | 'token' | 'social'> {}
