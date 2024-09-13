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

export const LOG_MOCK = {
  id: 512,
  nickname: 'wow',
  description: '',
  image: null,
  createdAt: '2024-09-13T08:04:14.260Z',
  updatedAt: '2024-09-13T08:04:14.260Z',
  teamId: '4-wdj',
  isFollowing: false,
  followersCount: 0,
  followeesCount: 0,
  reviewCount: 0,
  averageRating: 0,
  mostFavoriteCategory: null,
} as const
