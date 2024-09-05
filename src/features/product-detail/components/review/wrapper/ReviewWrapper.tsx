import React from 'react'
import type { ReviewItem } from '@app/types'
import { ProductDetailLayout } from '@features/product-detail/layout'
import LatestDropdown from '../latest-dropdown/LatestDropdown'
import ReviewList from '../list/ReviewList'

const REVIEW: ReviewItem[] = [
  {
    user: { image: null, nickname: '동현스', id: 1 },
    content:
      '전작과 동일하게, 소니 헤드폰 커넥트 애플리케이션을 통한 노이즈 캔슬링 컨트롤이 가능하다. 1000XM2에 있었던 대기압 센서도 그대로 탑재!',
    reviewImages: [],
    isLiked: true,
    rating: 5,
    likeCount: 132,
    id: 1,
    productId: 1,
    updatedAt: '2024-09-05T19:17:23.709Z',
    createdAt: '2024-09-05T19:17:23.709Z',
    userId: 1,
  },
  {
    user: {
      image: 'string',
      nickname: 'string',
      id: 1,
    },
    reviewImages: [
      {
        source: 'https://example.com/...',
        id: 1,
      },
    ],
    productId: 1,
    userId: 1,
    updatedAt: '2024-09-05T19:17:23.709Z',
    createdAt: '2024-09-05T19:17:23.709Z',
    isLiked: true,
    likeCount: 0,
    content: 'string',
    rating: 0,
    id: 1,
  },
]

export default function ReviewWrapper() {
  return (
    <ProductDetailLayout title="상품 리뷰" renderDropdown={<LatestDropdown />}>
      <ReviewList reviews={REVIEW} />
    </ProductDetailLayout>
  )
}
