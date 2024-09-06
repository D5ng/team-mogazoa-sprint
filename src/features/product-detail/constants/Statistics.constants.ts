import ReviewIcon from '@app/images/icons/review-icon.svg'
import HeartIcon from '@app/images/icons/heart-icon.svg'
import StarRatingIcon from '@app/images/icons/star-rating-icon.svg'

export const STATISTICS_CARD = [
  {
    name: 'rating',
    title: '별점 평균',
    image: StarRatingIcon,
  },
  {
    name: 'favoriteCount',
    title: '찜',
    image: HeartIcon,
  },
  {
    name: 'reviewCount',
    title: '리뷰',
    image: ReviewIcon,
  },
] as const

export const MOCK = {
  id: 1,
  name: '에어팟 프로',
  description: '노이즈 캔슬링이 잘 되는 이어폰',
  image:
    'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1591634795000',
  rating: 4.5,
  reviewCount: 100,
  favoriteCount: 99,
  categoryId: 1,
  createdAt: '2024-08-09T04:07:45.676Z',
  updatedAt: '2024-08-09T04:07:45.676Z',
  writerId: 1,
  isFavorite: false,
  category: {
    id: 1,
    name: '전자제품',
  },
  categoryMetric: {
    rating: 3.8,
    favoriteCount: 120,
    reviewCount: 80,
  },
} as const
