export interface ReviewResponse {
  nextCursor: boolean
  list: ReviewItem[]
}

export interface ReviewItem {
  user: {
    image: string
    nickname: string
    id: number
  }
  reviewImages: [
    {
      source: string
      id: number
    },
  ]
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
