import Image from 'next/image'
import type { ProductReviewItem } from '@shared/types'
import { star } from '@shared/icons'

export default function ReviewRating({
  rating,
}: Pick<ProductReviewItem, 'rating'>) {
  const ratingCount = Array(rating)
    .fill(0)
    .map((_, i) => i)

  return (
    <div className="flex gap-x-[2px]">
      {ratingCount.map((rating) => (
        <Image
          src={star}
          alt=""
          width={18}
          height={18}
          key={rating}
          className="tablet:w-3 tablet:h-3"
        />
      ))}
    </div>
  )
}
