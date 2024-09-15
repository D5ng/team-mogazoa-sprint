import { useFetchFollowers } from '@/src/shared/hooks/query/user.query'
import type { ProfileStatsProps } from './ProfileStats.type'
import { useToggle } from '@/src/shared/hooks'
import { ProfileFollowModal } from '@/src/widgets/profile-follow-modal/components'

export default function ProfileStats({
  userId,
  followersCount,
  followeesCount,
}: ProfileStatsProps) {
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  return (
    <div className="flex gap-[100px] tablet:gap-40 mobile:gap-[120px]">
      <button onClick={onOpenToggle}>
        <div className="flex flex-col items-center text-white text-xl">
          <div>{followersCount}</div>
          <span className="text-black-20 text-base">팔로워</span>
        </div>
      </button>
      <button>
        <div className="flex flex-col items-center text-white text-xl">
          <div>{followeesCount}</div>
          <span className="text-black-20 text-base">팔로잉</span>
        </div>
      </button>
      {isToggle && (
        <ProfileFollowModal userId={userId} onCloseToggle={onCloseToggle} />
      )}
    </div>
  )
}
