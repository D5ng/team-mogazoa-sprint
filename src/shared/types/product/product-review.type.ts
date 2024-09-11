export interface ProductReviewsResponse {
  nextCursor: number
  list: ProductReviewItem[]
}

export interface ProductReviewItem {
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

export interface FetchProductsReviews {
  productId: number
  order?: string
  cursor?: number
}
