import { useRating } from '@widgets/product-review-modal/hooks'
import RatingListItem from './RatingListItem'
import type { Control } from 'react-hook-form'
import type { CreateReview } from '@shared/types'

interface RatingProps {
  control: Control<CreateReview>
}

export default function Rating({ control }: RatingProps) {
  const { virtualRating, onClick, onMouseEnter, onMouseLeave } =
    useRating(control)

  return (
    <div className="flex items-center gap-x-5 mt-5">
      <span className="text-base text-black-30">별점</span>
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
    </div>
  )
}
