import { review, star } from '@shared/icons'

export const LOG_CARD = [
  {
    name: 'averageRating',
    title: '남긴 별점 평균',
    image: star,
  },
  {
    name: 'reviewCount',
    title: '남긴 리뷰',
    image: review,
  },
  {
    name: 'mostFavoriteCategory',
    title: '관심 카테고리',
  },
] as const
