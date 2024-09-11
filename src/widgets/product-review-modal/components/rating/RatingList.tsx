import { useRating } from '@widgets/product-review-modal/hooks'
import RatingListItem from './RatingListItem'

export default function RatingList() {
  const { virtualRating, onClick, onMouseEnter, onMouseLeave } = useRating()
  return (
    <ul className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <RatingListItem
          key={index}
          currentIndex={index}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          rating={virtualRating}
        />
      ))}
    </ul>
  )
}
