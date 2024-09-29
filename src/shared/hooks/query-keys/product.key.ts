import { ReviewSortOptions } from '@widgets/product/product-detail/constants'
import { CategoryId } from '@shared/ui'

export const productKeys = {
  productsByRating: ['products-rating'],
  productsByReview: ['products-review'],
  productsBySearch: (keyword: string, categoryId: CategoryId | null) => [
    'products-search',
    keyword,
    categoryId,
  ],
  productsByCategory: (categoryId: CategoryId, inputValue: string) => [
    'products-category',
    categoryId,
    inputValue,
  ],
  detail: (productId: number) => ['product-detail', productId] as const,
  reviews: (productId: number, order?: ReviewSortOptions) =>
    ['product-detail-review', productId, order || 'recent'] as const,
}
