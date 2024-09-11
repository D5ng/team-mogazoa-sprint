export interface ReviewResponse {
  nextCursor: boolean
  list: ReviewItem[]
}

export interface ReviewItem {
  user: ReviewUser
  reviewImages: ReviewImage[]
  productId: number
  userId: number
  updatedAt: string
  createdAt: string
  isLiked: boolean
  likeCount: number
  content: string
  rating: number
  id: number
}

export interface ReviewUser {
  image: string | null
  nickname: string
  id: number
}
