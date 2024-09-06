export interface ProductCardItems {
  id: number
  image: string
  name: string
  reveiwCount: number
  favoriteCount: number
  rating: number
}

export type ProductCardProps = {
  data: ProductCardItems
}

export type ProductCardData = ProductCardItems[]
