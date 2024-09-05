import Image from 'next/image'
import type { ReviewItem } from '@app/types'
import { star } from '@app/icons'

export default function ReviewRating({ rating }: Pick<ReviewItem, 'rating'>) {
  const ratingCount = Array(rating)
    .fill(0)
    .map((_, i) => i)

  return (
    <div className="flex gap-x-[2px]">
      {ratingCount.map((rating) => (
        <Image src={star} alt="" width={18} height={18} key={rating} />
      ))}
    </div>
  )
}
