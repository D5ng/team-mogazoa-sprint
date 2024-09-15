import type { ProfileStatsProps } from './ProfileStats.type'
import { FolloweesButton, FollowerButton } from '@widgets/profile/components'

export default function ProfileStats({ userId, userData }: ProfileStatsProps) {
  return (
    <div className="flex gap-[100px] tablet:gap-40 mobile:gap-[120px]">
      <FollowerButton userId={userId} {...userData} />
      <FolloweesButton userId={userId} {...userData} />
    </div>
  )
}
