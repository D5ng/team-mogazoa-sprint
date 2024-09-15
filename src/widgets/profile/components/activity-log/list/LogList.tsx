import { LogListItem } from '@widgets/profile/components/activity-log'
import type { UserItem } from '@shared/types'
import { LOG_CARD } from '@/src/widgets/profile/constants/ActivityLog.constants'

export default function LogList({
  mostFavoriteCategory,
  ...userData
}: UserItem) {
  return (
    <ul className="flex gap-x-5 mobile:gap-x-2.5 mobile:gap-y-[15px] mobile:relative">
      {LOG_CARD.map((card) => {
        const value =
          card.name === 'mostFavoriteCategory'
            ? (mostFavoriteCategory?.name ?? null)
            : userData[card.name]
        return <LogListItem key={card.name} {...card} value={value} />
      })}
    </ul>
  )
}
