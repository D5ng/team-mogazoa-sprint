import { toast } from 'react-toastify'
import { Button } from '@shared/ui'
import {
  useFollowUser,
  useUnFollowUser,
} from '@shared/hooks/mutate/follow.mutate'
import { useUserStore } from '@shared/store'
interface UserProfileButtonProps {
  isFollowing: boolean
  userId: number
}

export default function UserProfileButton({
  isFollowing,
  userId,
}: UserProfileButtonProps) {
  const { user } = useUserStore()

  const followMutation = useFollowUser()
  const unFollowMutation = useUnFollowUser()

  const handleFollowClick = () => {
    isFollowing
      ? unFollowMutation.mutate({ userId })
      : followMutation.mutate({ userId })
    if (!user) return toast.error('로그인이 필요합니다')
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
