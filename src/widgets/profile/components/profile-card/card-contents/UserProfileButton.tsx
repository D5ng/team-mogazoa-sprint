import { Button } from '@shared/ui'
import { toastCheckAuth } from '@shared/utils'
import {
  useFollowUser,
  useUnFollowUser,
} from '@shared/hooks/mutate/follow.mutate'

interface UserProfileButtonProps {
  isFollowing: boolean
  userId: number
}

export default function UserProfileButton({
  isFollowing,
  userId,
}: UserProfileButtonProps) {
  const followMutation = useFollowUser()
  const unFollowMutation = useUnFollowUser()

  const handleFollowClick = () =>
    toastCheckAuth() &&
    (isFollowing
      ? unFollowMutation.mutate({ userId })
      : followMutation.mutate({ userId }))

  return (
    <Button
      variant={isFollowing ? 'tertiary' : 'primary'}
      onClick={handleFollowClick}
    >
      {isFollowing ? '팔로우 취소' : '팔로우'}
    </Button>
  )
}
