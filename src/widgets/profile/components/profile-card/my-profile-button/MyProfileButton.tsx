import { Button } from '@shared/ui'
import { useAuth } from '@widgets/auth/hooks'

export default function MyProfileButton() {
  const { logout } = useAuth()
  return (
    <div className="w-full flex flex-col gap-5 tablet:gap-4 mobile:gap-2.5">
      <Button variant="primary">프로필 편집</Button>
      <Button variant="tertiary" onClick={logout}>
        로그아웃
      </Button>
    </div>
  )
}
