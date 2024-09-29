import { useToggle } from '@shared/hooks'
import { ProfileFolloweesModal } from '@widgets/profile/components'
import type { UserId } from '@shared/types'
import kIndexer from '@/src/shared/utils/kIndexet'

interface FollowerButtonProps {
  userId: UserId
  nickname: string
  followeesCount: number
}

export default function FolloweesButton({
  userId,
  nickname,
  followeesCount,
}: FollowerButtonProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <>
      <button type="button" onClick={onOpenToggle}>
        <div className="flex flex-col items-center text-white text-xl">
          <div>{kIndexer(followeesCount)}</div>
          <span className="text-black-20 text-base">팔로잉</span>
        </div>
      </button>
      {isToggle && (
        <ProfileFolloweesModal
          userId={userId}
          nickname={nickname}
          onCloseToggle={onCloseToggle}
        />
      )}
    </>
  )
}
