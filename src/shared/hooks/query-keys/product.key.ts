import { ReviewSortOptions } from '@widgets/product/product-detail/constants'
import { CategoryId } from '@shared/ui'

export const productKeys = {
  productsByRating: ['products-rating'],
  productsByReview: ['products-review'],
  productsBySearch: (keyword: string) => ['products-search', keyword],
  productsByCategory: (categoryId: CategoryId) => [
    'products-category',
    categoryId,
  ],
  detail: (productId: number) => ['product-detail', productId] as const,
  reviews: (productId: number, order?: ReviewSortOptions) =>
    ['product-detail-review', productId, order || 'recent'] as const,
}
