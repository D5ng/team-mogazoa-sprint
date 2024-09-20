import Image from 'next/image'
import { defaultProfile } from '@shared/icons'
import type { ProductReviewItem, ReviewUser } from '@shared/types'
import ReviewRating from './rating/ReviewRating'

export default function ReviewProfile({
  nickname,
  rating,
  image,
}: Pick<ReviewUser, 'nickname' | 'image'> & Pick<ProductReviewItem, 'rating'>) {
  return (
    <div className="flex items-center gap-x-2.5 w-[150px]">
      <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden tablet:w-[36px] tablet:h-[36px] tablet:text-sm ">
        <Image src={image || defaultProfile} alt="" fill />
      </div>
      <div className="flex flex-col gap-y-[5px]">
        <span className="text-base">{nickname}</span>
        <ReviewRating rating={rating} />
      </div>
    </div>
  )
}
