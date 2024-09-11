
import type { ReviewItem } from '@/src/app/types'
export const LATEST_DROPDOWN_ITEMS = [
  '최신순',
  '별점 높은순',
  '별점 낮은순',
  '좋아요순',
] as const
export const REVIEW_MOCK: ReviewItem[] = [
  {
    user: { image: null, nickname: '동현스', id: 1 },
    content:
      '전작과 동일하게, 소니 헤드폰 커넥트 애플리케이션을 통한 노이즈 캔슬링 컨트롤이 가능하다. 1000XM2에 있었던 대기압 센서도 그대로 탑재!',
    reviewImages: [],
    isLiked: false,
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
      id: 2,
    },
    reviewImages: [],
    productId: 2,
    userId: 2,
    updatedAt: '2024-09-05T19:17:23.709Z',
    createdAt: '2024-09-05T19:17:23.709Z',
    isLiked: true,
    likeCount: 0,
    content:
      '컴파운드 패턴을 사용하면 재사용성과 적은 props로 관리하기 편합니다.',
    rating: 3,
    id: 2,
  },
]
