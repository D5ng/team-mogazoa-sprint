import { ReviewListItem } from '@widgets/product-detail/components'
import type { ProductReviewItem } from '@shared/types'
import ReviewEmptyList from './ReviewEmptyList'

interface ReviewListProps {
  reviews: ProductReviewItem[]
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
