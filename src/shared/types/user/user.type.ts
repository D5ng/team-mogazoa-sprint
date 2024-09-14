import { Variant } from '@/src/widgets/product/ranking/Ranking.types'

export interface UserId {
  userId: number | undefined
}

export interface FavoriteCategory {
  name: string
  id: number
}

export interface UserCommon {
  updatedAt: string
  createdAt: string
  teamId: string
  image: string | null
  description: string
  nickname: string
  id: number
  reviewCount: number
  followersCount: number
}

export interface UserRankingItem {
  rank: number
  image: string
  nickname: string
  followersCount: number
  reviewCount: number
  variant: Variant
  id: number
}

export type UserRanking = UserRankingItem[]

export interface UserItem extends UserCommon {
  mostFavoriteCategory: FavoriteCategory | null
  averageRating: number
  followeesCount: number
  isFollowing: boolean
}

export interface UsersProduct extends UserCommon {
  writerId: number
  categoryId: number
  rating: number
  image: string
  name: string
}

export interface UsersProductResponse {
  nextCursor: number
  list: UsersProduct[]
}

export interface UpdateMyProfile
  extends Pick<UserCommon, 'description' | 'nickname' | 'image'> {}

export type UserProfileUpdateResponse = Omit<
  UserCommon,
  'reviewCount' | 'followersCount'
>

export interface CursorParams {
  cursor?: number
}

export interface FetchFollows {
  userId: number
  cursor?: number
}
