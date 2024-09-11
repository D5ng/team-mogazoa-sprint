import { useAuth } from '@widgets/auth/hooks'

export default function index() {
  const { logout } = useAuth()

  return <button onClick={logout}>로그아웃</button>
}
