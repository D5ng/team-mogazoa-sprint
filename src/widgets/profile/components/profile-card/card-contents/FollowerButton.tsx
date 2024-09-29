import { ProfileFollowerModal } from '@widgets/profile/components'
import { useToggle } from '@shared/hooks'
import type { UserId } from '@shared/types'
import kIndexer from '@/src/shared/utils/kIndexet'

interface FollowerButtonProps {
  userId: UserId
  followersCount: number
  nickname: string
}

export default function FollowerButton({
  userId,
  followersCount,
  nickname,
}: FollowerButtonProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <>
      <button type="button" onClick={onOpenToggle}>
        <div className="flex flex-col items-center text-white text-xl">
          <div>{kIndexer(followersCount)}</div>
          <span className="text-black-20 text-base">팔로워</span>
        </div>
      </button>
      {isToggle && (
        <ProfileFollowerModal
          userId={userId}
          nickname={nickname}
          onCloseToggle={onCloseToggle}
        />
      )}
    </>
  )
}
