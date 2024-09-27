import { UserItem } from '@shared/types'
import { FolloweesButton, FollowerButton } from '@widgets/profile/components'
import type { UserId } from '@shared/types'

interface ProfileStatsProps {
  userId: UserId
  userData: UserItem
}

export default function ProfileStats({ userId, userData }: ProfileStatsProps) {
  return (
    <div className="flex gap-[100px] tablet:gap-40 mobile:gap-[120px]">
      <FollowerButton userId={userId} {...userData} />
      <FolloweesButton userId={userId} {...userData} />
    </div>
  )
}
