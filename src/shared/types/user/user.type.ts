import type { ProductListItem } from '@shared/types/product'

export type UserId = number | undefined

export interface UserIdProp {
  userId: UserId
}

export interface FavoriteCategory {
  name: string
  id: number
}

export interface UserCommon {
  updatedAt: string
  id: UserId
  createdAt: string
  teamId: string
  image: string | null
  description: string
  nickname: string
  reviewCount: number
  followersCount: number
  name: string
}

export interface UserRankingItem {
  rank: number
  image: string
  nickname: string
  followersCount: number
  reviewCount: number
  variant: 'first' | 'second' | 'etc'
  id: number
}

export type UserRanking = UserRankingItem[]

export interface UserItem extends UserCommon {
  mostFavoriteCategory: FavoriteCategory | null
  averageRating: number
  followeesCount: number
  isFollowing: boolean
}

export interface Follower extends UserCommon {
  writerId: number
  categoryId: number
  rating: number
  image: string
  name: string
}

export interface FollowerItem extends UserCommon {
  id: number
  follower: Follower
}

export interface FolloweesItem extends UserCommon {
  id: UserId
  followee: Follower
}

export interface followerProductResponse {
  nextCursor: number
  list: FollowerItem[]
}

export interface followeesProductResponse {
  nextCursor: number
  list: FolloweesItem[]
}

export interface UsersProductResponse {
  nextCursor: number
  list: ProductListItem[]
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

export interface UserFetch {
  userId: UserId
  cursor?: number
}

export type UserPayload = {
  image: string
  description: string
  nickname: string
}
