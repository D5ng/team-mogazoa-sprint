export interface UserId {
  userId: number
}

export interface UserData {
  updatedAt: string
  createdAt: string
  teamId: string
  image: string
  description: string
  nickname: string
  id: number
  mostFavoriteCategory: FavoriteCategory
  averageRating: number
  reviewCount: number
  followeesCount: number
  followersCount: number
  isFollowing: boolean
}

export interface FavoriteCategory {
  name: string
  id: number
}

export interface UserCommon {
  updatedAt: string
  createdAt: string
  teamId: string
  image: string
  description: string
  nickname: string
  id: number
  reviewCount: number
  followersCount: number
}

export type UserRanking = UserCommon[]

export interface UserItem extends UserCommon {
  mostFavoriteCategory: FavoriteCategory
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
