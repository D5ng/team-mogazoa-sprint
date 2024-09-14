import { Button } from '@shared/ui'
import type { ProfileButtonProps } from './ProfileButton.type'

export default function ProfileButton({ isFollowing }: ProfileButtonProps) {
  return isFollowing ? (
    <Button variant="tertiary">팔로우 취소</Button>
  ) : (
    <Button variant="primary">팔로우</Button>
  )
}
