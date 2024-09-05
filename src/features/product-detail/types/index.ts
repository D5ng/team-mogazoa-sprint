export interface ProductDetailResponse {
  id: number
  name: string
  description: string
  image: string | null
  rating: number
  reviewCount: number
  favoriteCount: number
  categoryId: number
  createdAt: string
  updatedAt: string
  writerId: number
  isFavorite: boolean
  category: Category
  categoryMetric: CategoryMetric
}

export interface Category {
  id: number
  name: string
}

export interface CategoryMetric {
  rating: number
  favoriteCount: number
  reviewCount: number
}
