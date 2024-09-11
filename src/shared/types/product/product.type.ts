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

export interface FetchProducts {
  keyword?: string
  category?: number
  order?: 'recent' | 'rating' | 'reviewCount'
  cursor?: number
}

export type ProductType = {
  categoryId: number
  image: File | null
  description: string
  name: string
}

export type ProductPayload = {
  categoryId: number
  image: string
  description: string
  name: string
}

export type ProductId = {
  productId: number
}
