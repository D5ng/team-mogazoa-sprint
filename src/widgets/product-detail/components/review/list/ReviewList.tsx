import { ReviewListItem } from '@widgets/product-detail/components'
import { useFetchProductReview, useIntersect } from '@shared/hooks'
import ReviewEmptyList from './ReviewEmptyList'
import { useReviewOptionStore } from '@shared/store'

interface ReviewListProps {
  productId: number
}

export default function ReviewList({ productId }: ReviewListProps) {
  const option = useReviewOptionStore((state) => state.option)
  const {
    data: reviews,
    isFetching,
    hasNextPage,
    fetchNextPage,
    error,
  } = useFetchProductReview({
    productId,
    order: option || 'recent',
  })

  if (error && !isFetching) throw error

  const onIntersect = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
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
