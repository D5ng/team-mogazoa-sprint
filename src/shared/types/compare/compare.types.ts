export interface Product {
  name: string
  rating: number
  reviewCount: number
  favoriteCount: number
}

export interface ComparisonResult {
  rating: string 
  reviewCount: string 
  favoriteCount: string 
  finalResult: {
    productName: string
    winCount: number
  } | '무승부입니다!'
}

export interface ComparisonTableProps {
  product1: Product
  product2: Product
}
