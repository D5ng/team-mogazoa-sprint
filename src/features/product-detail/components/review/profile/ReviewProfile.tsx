import Image from 'next/image'
import { ReviewItem, ReviewUser } from '@app/types'
import ReviewProfileImage from '@/public/test/review-profile.jpg'
import ReviewRating from './rating/ReviewRating'

export default function ReviewProfile({
  nickname,
  rating,
}: Pick<ReviewUser, 'nickname' | 'image'> & Pick<ReviewItem, 'rating'>) {
  return (
    <div className="flex items-center gap-x-2.5 w-[150px]">
      <div className="relative w-[42px] h-[42px] rounded-full overflow-hidden">
        <Image src={ReviewProfileImage} alt="" fill />
      </div>
      <div className="flex flex-col gap-y-[5px]">
        <span className="text-base">{nickname}</span>
        <ReviewRating rating={rating} />
      </div>
    </div>
  )
}
