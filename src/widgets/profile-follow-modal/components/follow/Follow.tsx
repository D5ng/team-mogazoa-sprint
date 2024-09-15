import { ProfileImage } from '@shared/ui'

interface FollowProps {
  nickname: string
  image: string | null
}

export default function Follow(props: FollowProps) {
  return (
    <div className="flex items-center gap-5">
      <ProfileImage url={props.image} size={52} />
      <span>{props.nickname}</span>
    </div>
  )
}
