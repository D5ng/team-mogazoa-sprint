import { useAuth } from '@widgets/auth/hooks'
import { Button } from '@shared/ui'

export default function index() {
  const { logout } = useAuth()

  return (
    <Button variant="primary" onClick={logout}>
      로그아웃
    </Button>
  )
}
