import type { Category, CategoryMetric } from './product-detail.type'

export interface ProductFavoriteResponse {
  updatedAt: string
  createdAt: string
  writerId: number
  categoryId: number
  favoriteCount: number
  reviewCount: number
  rating: number
  image: string
  name: string
  id: number
  categoryMetric: CategoryMetric
  category: Category
  isFavorite: boolean
  description: string
}
