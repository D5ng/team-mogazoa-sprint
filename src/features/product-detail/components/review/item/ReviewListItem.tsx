import React from 'react'
import type { ReviewItem } from '@app/types'
import ReviewProfile from '../profile/ReviewProfile'
import ReviewContents from '../contents/ReviewContents'
import dayjs from 'dayjs'

export default function ReviewListItem({
  user,
  reviewImages,
  isLiked,
  updatedAt,
  content,
  rating,
  userId,
  likeCount,
}: ReviewItem) {
  const date = dayjs(updatedAt).format('YYYY-MM-DD')
  return (
    <li className="flex items-start gap-x-[80px] bg-black-60 p-[30px] rounded-xl border border-black-70 mobile:flex-col mobile:gap-x-0 mobile:gap-y-[30px]">
      <ReviewProfile
        nickname={user.nickname}
        rating={rating}
        image={user.image}
      />
      <ReviewContents
        content={content}
        reviewImages={reviewImages}
        updatedAt={date}
        isLiked={isLiked}
        userId={userId}
        likeCount={likeCount}
      />
    </li>
  )
}
