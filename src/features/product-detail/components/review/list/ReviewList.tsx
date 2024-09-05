import { ReviewListItem } from '@features/product-detail/components'
import type { ReviewItem } from '@/src/app/types'

interface ReviewListProps {
  reviews: ReviewItem[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <ul className="flex flex-col gap-y-5">
      {reviews.map((review) => (
        <ReviewListItem {...review} />
      ))}
    </ul>
  )
}
