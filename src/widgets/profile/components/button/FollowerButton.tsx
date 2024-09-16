import { ProfileFollowerModal } from '@widgets/profile-follow-modal/components'
import { useToggle } from '@shared/hooks'

interface FollowerButtonProps {
  userId: number | undefined
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
          <div>{followersCount}</div>
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
