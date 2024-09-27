import { heart, review, star } from '@shared/icons'

export const STATISTICS_CARD = [
  {
    name: 'rating',
    title: '별점 평균',
    icon: star,
  },
  {
    name: 'favoriteCount',
    title: '찜',
    icon: heart,
  },
  {
    name: 'reviewCount',
    title: '리뷰',
    icon: review,
  },
] as const
