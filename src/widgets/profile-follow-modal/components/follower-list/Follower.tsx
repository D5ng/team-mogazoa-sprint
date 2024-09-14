interface FollowerProps {
  nickname: string
}

export default function Follower({ nickname }: FollowerProps) {
  return <div>{nickname}</div>
}
