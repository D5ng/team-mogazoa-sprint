export interface ReviewId {
  reviewId: number
}

export interface CreateReview {
  productId: number
  images: string[]
  content: string
  rating: number
}

export interface UpdateReview extends ReviewId {
  images: { id: number } | { source: string }[]
  content: string
  rating: number
}
