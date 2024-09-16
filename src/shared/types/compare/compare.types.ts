export interface Product {
  rating: number
  reviewCount: number
  favoriteCount: number
}

export interface ComparisonResult {
  rating: '상품1 우세' | '상품2 우세' | '무승부'
  reviewCount: '상품1 우세' | '상품2 우세' | '무승부'
  favoriteCount: '상품1 우세' | '상품2 우세' | '무승부'
}

export interface ComparisonTableProps {
  product1: Product
  product2: Product
}
