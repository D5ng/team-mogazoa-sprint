import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import type { OptionsType } from 'cookies-next/lib/types'
import type { AuthResponse } from '@shared/types'

export const getAuthToken = () => {
  const token = getCookie('auth')
  if (!token) return null
  const parseToken = JSON.parse(token)
  return parseToken
}

export const setAuthToken = (
  name: string,
  data: AuthResponse,
  options?: OptionsType,
) => {
  const transformedToken = {
    accessToken: data.accessToken,
    ...data.user,
  }

  return setCookie(name, transformedToken, {
    ...options,
    maxAge: 60 * 60 * 24,
  })
}

export const deleteAuthToken = () => deleteCookie('auth')