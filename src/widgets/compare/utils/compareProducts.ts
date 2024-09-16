import {
  ComparisonResult,
  Product,
} from '@/src/shared/types/compare/compare.types'

const compareProducts = (
  product1: Product,
  product2: Product,
): ComparisonResult => {
  return {
    rating:
      product1.rating > product2.rating
        ? '상품1 우세'
        : product1.rating < product2.rating
          ? '상품2 우세'
          : '동일',
    reviewCount:
      product1.reviewCount > product2.reviewCount
        ? '상품1 우세'
        : product1.reviewCount < product2.reviewCount
          ? '상품2 우세'
          : '동일',
    favoriteCount:
      product1.favoriteCount > product2.favoriteCount
        ? '상품1 우세'
        : product1.favoriteCount < product2.favoriteCount
          ? '상품2 우세'
          : '동일',
  }
}

export default compareProducts
