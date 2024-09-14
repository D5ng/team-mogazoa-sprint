import { Button } from '@shared/ui'
import type { ProfileButtonProps } from './ProfileButton.type'
import {
  useFollowUser,
  useUnFollowUser,
} from '@shared/hooks/mutate/follow.mutate'

export default function ProfileButton({
  isFollowing,
  userId,
}: ProfileButtonProps) {
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
