import {
  ComparisonResult,
  Product,
} from '@/src/shared/types/compare/compare.types'

const compareProducts = (
  product1: Product,
  product2: Product,
): ComparisonResult => {
  const ratingResult =
    product1.rating > product2.rating
      ? `${product1.name} 우세`
      : product1.rating < product2.rating
        ? `${product2.name} 우세`
        : '무승부'

  const reviewCountResult =
    product1.reviewCount > product2.reviewCount
      ? `${product1.name} 우세`
      : product1.reviewCount < product2.reviewCount
        ? `${product2.name} 우세`
        : '무승부'

  const favoriteCountResult =
    product1.favoriteCount > product2.favoriteCount
      ? `${product1.name} 우세`
      : product1.favoriteCount < product2.favoriteCount
        ? `${product2.name} 우세`
        : '무승부'

  const results = [ratingResult, reviewCountResult, favoriteCountResult]
  const product1Wins = results.filter((result) =>
    result.includes(product1.name),
  ).length
  const product2Wins = results.filter((result) =>
    result.includes(product2.name),
  ).length

  const finalResult =
    product1Wins > product2Wins
      ? { productName: product1.name, winCount: product1Wins }
      : product2Wins > product1Wins
        ? { productName: product2.name, winCount: product2Wins }
        : '무승부입니다!'

  return {
    rating: ratingResult,
    reviewCount: reviewCountResult,
    favoriteCount: favoriteCountResult,
    finalResult: finalResult,
  }
}

export default compareProducts
