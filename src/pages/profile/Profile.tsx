import { UserData } from '@shared/types'
import { ProfileCard } from '@widgets/profile'

export default function Profile({
  isFollowing,
  followeesCount,
  followersCount,
}: Pick<UserData, 'isFollowing' | 'followeesCount' | 'followersCount'>) {
  return (
    <section className="flex gap-x-[60px] mx-auto">
      <ProfileCard
        isFollowing={isFollowing}
        followeesCount={followeesCount}
        followersCount={followersCount}
      />
    </section>
  )
}
