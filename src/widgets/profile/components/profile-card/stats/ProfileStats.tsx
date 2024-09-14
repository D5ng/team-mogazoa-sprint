import type { ProfileStatsProps } from './ProfileStats.type'
import type { UserItem } from '@shared/types'

export default function ProfileStats({ userData }: ProfileStatsProps) {
  const { followersCount, followeesCount } = userData

  return (
    <div className="flex gap-[100px] tablet:gap-40 mobile:gap-[120px]">
      <div className="flex flex-col items-center text-white text-xl">
        <div>{followersCount}</div>
        <span className="text-black-20 text-base">팔로워</span>
      </div>
      <div className="flex flex-col items-center text-white text-xl">
        <div>{followeesCount}</div>
        <span className="text-black-20 text-base">팔로잉</span>
      </div>
    </div>
  )
}
