import LogListItem from './LogListItem'
import { LOG_CARD } from '@widgets/profile/constants'
import type { UserItem } from '@shared/types'

export default function LogList({
  mostFavoriteCategory,
  ...userData
}: UserItem) {
  const getCardValue = (card: (typeof LOG_CARD)[number]) => {
    switch (card.name) {
      case 'mostFavoriteCategory':
        return mostFavoriteCategory?.name ?? null

      case 'averageRating':
        const rating = userData[card.name]
        return typeof rating === 'number' ? rating.toFixed(1) : null

      default:
        return userData[card.name]
    }
  }

  return (
    <ul className="flex gap-x-5 mobile:gap-x-2.5 mobile:gap-y-[15px] mobile:relative">
      {LOG_CARD.map((card) => (
        <LogListItem key={card.name} {...card} value={getCardValue(card)} />
      ))}
    </ul>
  )
}
