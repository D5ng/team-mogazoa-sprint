import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'

export default function useLogout() {
  const router = useRouter()

  return async () => {
    try {
      deleteCookie('auth')
      router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
}
