import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import type { OptionsType } from 'cookies-next/lib/types'
import type { AuthResponse } from '@shared/types'

export const getAuthUser = () => {
  const token = getCookie('auth')
  if (!token) return null
  const parseToken = JSON.parse(token)
  const user = parseToken.user
  return user
}

export const setAuthUser = (
  name: string,
  data: AuthResponse,
  options?: OptionsType,
) => {
  return setCookie(name, data, {
    ...options,
    maxAge: 60 * 60 * 24,
  })
}

export const deleteAuthToken = () => deleteCookie('auth')
