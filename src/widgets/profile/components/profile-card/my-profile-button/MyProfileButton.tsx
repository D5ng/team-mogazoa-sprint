import { Button } from '@shared/ui'
import { useToggle } from '@shared/hooks'

interface MyProfileButtonProps {
  userId: number
}

export default function MyProfileButton({ userId }: MyProfileButtonProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  return (
    <div className="w-full flex flex-col gap-5 tablet:gap-4 mobile:gap-2.5">
      <Button variant="primary">프로필 편집</Button>
      <Button variant="tertiary">로그아웃</Button>
    </div>
  )
}
