import { ReviewSortOptions } from '@/src/widgets/product/product-detail/constants'

export interface ProductReviewsResponse {
  nextCursor: number
  list: ProductReviewItem[]
}

export interface ReviewImages {
  source: string
  id: number
}

export interface ReviewUser {
  image: string | null
  nickname: string
  id: number
}

export interface ProductReviewItem {
  user: ReviewUser
  reviewImages: ReviewImages[]
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
  order?: ReviewSortOptions
  cursor?: number
}
