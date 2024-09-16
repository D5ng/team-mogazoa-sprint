import { create } from 'zustand'
import { getCookie } from 'cookies-next'
import type { User } from '@shared/types'

interface UserState {
  user: User | null
}

const useUserStore = create<UserState>()(() => ({
  user: (() => {
    const authCookie = getCookie('auth')
    if (authCookie) {
      try {
        const parsedAuth = JSON.parse(authCookie as string)
        return parsedAuth?.user || null
      } catch {
        return null
      }
    }
    return null
  })(),
}))

export default useUserStore