export interface ProductResponse {
  nextCursor: number
  list: ProductListItem[]
}

export interface ProductListItem {
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
}

export type ProductAddType = {
  categoryId: number
  image: File | null
  description: string
  name: string
}

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
