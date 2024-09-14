import { ProfileImage } from '@shared/ui'

interface FollowProps {
  nickname: string
  image: string | null
}

export default function Follow({ nickname, image }: FollowProps) {
  return (
    <div className="flex items-center gap-5">
      <ProfileImage url={image} size={52} />
      <span>{nickname}</span>
    </div>
  )
}
