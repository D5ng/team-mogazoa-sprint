import { ProfileImage } from '@/src/shared/ui'

interface FollowerProps {
  nickname: string
  image: string | null
}

export default function Follower({ nickname, image }: FollowerProps) {
  return (
    <div className="flex items-center gap-5">
      <ProfileImage url={image} size={52} />
      <span>{nickname}</span>
    </div>
  )
}
