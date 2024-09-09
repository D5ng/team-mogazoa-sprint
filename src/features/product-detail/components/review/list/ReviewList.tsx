import { ReviewListItem } from '@features/product-detail/components'
import type { ReviewItem } from '@/src/app/types'
import ReviewEmptyList from './ReviewEmptyList'

interface ReviewListProps {
  reviews: ReviewItem[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) return <ReviewEmptyList />

  return (
    <ul className="flex flex-col gap-y-5">
      {reviews.map((review) => (
        <ReviewListItem key={review.productId} {...review} />
      ))}
    </ul>
  )
}
