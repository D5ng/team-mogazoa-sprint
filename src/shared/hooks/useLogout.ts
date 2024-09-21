import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import { useUserStore } from '@shared/store'

export default function useLogout() {
  const router = useRouter()
  const logout = useUserStore((state) => state.logout)

  return async () => {
    try {
      deleteCookie('auth')
      logout()
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
}
