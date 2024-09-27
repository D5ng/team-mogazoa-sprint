export interface ReviewId {
  reviewId: number
}

export interface CreateReview {
  productId: number
  images: {
    url: string
    index: number
  }[]
  content: string
  rating: number
}

export interface CreateReviewPayload {
  productId: number
  images: string[]
  content: string
  rating: number
}

export interface UpdateReview extends ReviewId {
  images: {
    url: string
    index: number
  }[]
  content: string
  rating: number
}

export interface UpdateReviewPayload {
  images: ({ id: number } | { source: string })[]
  content: string
  rating: number
}
