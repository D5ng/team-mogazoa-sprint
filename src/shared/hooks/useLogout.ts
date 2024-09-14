import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'

export default function useLogout() {
  const router = useRouter()
  deleteCookie('token')
  router.push('/')
}
