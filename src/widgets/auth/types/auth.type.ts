export interface SignUpFieldData {
  email: string
  nickname: string
  password: string
  passwordConfirmation: string
}

export interface SignInFieldData {
  email: string
  password: string
}

export interface NicknameFieldData {
  nickname: string
}

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

export interface AuthServerError {
  message: string
  details?: {
    [K in keyof SignUpFieldData]?: {
      message: string
    }
  }
}
