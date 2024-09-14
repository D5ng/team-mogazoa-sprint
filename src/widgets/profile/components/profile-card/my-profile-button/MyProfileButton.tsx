import { Button } from '@shared/ui'
import { useAuth } from '@widgets/auth/hooks'
import { useToggle } from '@shared/hooks'
import ProfileFollowModal from '@/src/widgets/profile-follow-modal/components/modal/ProfileFollowModal'

export default function MyProfileButton() {
  const { logout } = useAuth()
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return (
    <div className="w-full flex flex-col gap-5 tablet:gap-4 mobile:gap-2.5">
      <Button variant="primary" onClick={onOpenToggle}>
        프로필 편집
      </Button>
      <Button variant="tertiary" onClick={logout}>
        로그아웃
      </Button>
      {isToggle && <ProfileFollowModal onCloseToggle={onCloseToggle} />}
    </div>
  )
}
