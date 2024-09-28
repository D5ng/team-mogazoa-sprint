import Link from 'next/link'
import { ProfileImage } from '@shared/ui'
import type { UserId } from '@shared/types'

interface FollowProps {
  id: UserId
  nickname: string
  image: string | null
  onCloseToggle: () => void
}

export default function Follow({
  id,
  nickname,
  image,
  onCloseToggle,
}: FollowProps) {
  const closeModal = () => onCloseToggle()
  return (
    <Link href={`/profile/${id}`} onClick={closeModal}>
      <div className="flex items-center gap-5 cursor-pointer">
        <ProfileImage url={image} size={52} />
        <span>{nickname}</span>
      </div>
    </Link>
  )
}
