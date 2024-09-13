import { ReviewListItem } from '@widgets/product-detail/components'
import { useFetchProductReview, useIntersect } from '@shared/hooks'
import { ReviewSortOptions } from '@widgets/product-detail/constants'
import ReviewEmptyList from './ReviewEmptyList'

interface ReviewListProps {
  productId: number
  reviewSortOption: ReviewSortOptions
}

export default function ReviewList({
  productId,
  reviewSortOption,
}: ReviewListProps) {
  const {
    data: reviews,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useFetchProductReview({
    productId,
    order: reviewSortOption,
  })

  const onIntersect = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage()
    }
  }

  const ref = useIntersect<HTMLDivElement>(onIntersect)

  if (reviews.length === 0) return <ReviewEmptyList />

  return (
    <>
      <ul className="flex flex-col gap-y-5">
        {reviews.map((review) => (
          <ReviewListItem key={review.id} {...review} />
        ))}
      </ul>
      <div className="w-[1px] h-2.5" ref={ref}></div>
    </>
  )
}
