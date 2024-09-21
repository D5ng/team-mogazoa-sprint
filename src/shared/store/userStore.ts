import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@shared/types'

interface UserState {
  user: User | null
  setUser: (user: User | null) => void
  login: (user: User) => void
  logout: () => void
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
    }
  )
)

export default useUserStore