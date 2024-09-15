import { Button } from '@shared/ui'
import type { UserProfileButtonProps } from './UserProfileButton.type'
import {
  useFollowUser,
  useUnFollowUser,
} from '@shared/hooks/mutate/follow.mutate'

export default function UserProfileButton({
  isFollowing,
  userId,
}: UserProfileButtonProps) {
  const followMutation = useFollowUser()
  const unFollowMutation = useUnFollowUser()

  const handleFollowClick = () => {
    if (isFollowing) {
      unFollowMutation.mutate({ userId })
    } else {
      followMutation.mutate({ userId })
    }
  }

  return (
    <Button
      variant={isFollowing ? 'tertiary' : 'primary'}
      onClick={handleFollowClick}
    >
      {isFollowing ? '팔로우 취소' : '팔로우'}
    </Button>
  )
}
