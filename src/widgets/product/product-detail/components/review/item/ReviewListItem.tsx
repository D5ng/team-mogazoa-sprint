import React from 'react'
import type { ProductReviewItem } from '@shared/types'
import ReviewProfile from '../profile/ReviewProfile'
import ReviewContents from '../contents/ReviewContents'
import dayjs from 'dayjs'

export default function ReviewListItem(props: ProductReviewItem) {
  const date = dayjs(props.updatedAt).format('YYYY-MM-DD')
  return (
    <li className="flex items-start gap-x-[80px] bg-black-60 p-[30px] rounded-xl border border-black-70 mobile:flex-col mobile:gap-x-0 mobile:gap-y-[30px]">
      <ReviewProfile
        nickname={props.user.nickname}
        rating={props.rating}
        image={props.user.image}
      />
      <ReviewContents {...props} />
    </li>
  )
}
