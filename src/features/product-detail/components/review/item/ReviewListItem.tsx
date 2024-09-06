import React from 'react'
import type { ReviewItem } from '@app/types'
import ReviewProfile from '../profile/ReviewProfile'
import ReviewContents from '../contents/ReviewContents'

export default function ReviewListItem({
  user,
  reviewImages,
  isLiked,
  updatedAt,
  content,
  rating,
}: ReviewItem) {
  return (
    <li className="flex items-start gap-x-[80px] bg-black-60 p-[30px] rounded-xl border border-black-70">
      <ReviewProfile
        nickname={user.nickname}
        rating={rating}
        image={user.image}
      />
      <ReviewContents
        content="전작과 동일하게, 소니 헤드폰 커넥트 애플리케이션을 통한 노이즈 캔슬링
        컨트롤이 가능하다. 1000XM2에 있었던 대기압 센서도 그대로 탑재!"
        reviewImages={[]}
        updatedAt="2024-12-18"
        isLiked={true}
      />
    </li>
  )
}
