import {
  useInfiniteQuery,
  useQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { fetchProductDetail, fetchProducts } from '@shared/api'
import { useProductStore } from '@shared/store/productStore'
import { ProductDetailResponse } from '@shared/types'
import { CategoryId } from '@shared/ui'
import { productKeys } from '@shared/hooks/query-keys'

export function useFetchProductsHot() {
  return useQuery({
    queryKey: productKeys.productsByReview,
    queryFn: () => fetchProducts({ order: 'reviewCount' }),
    select: (data) => {
      const transformedData = data.list ?? []
      return transformedData.slice(0, 6)
    },
  })
}

export function useFetchProductsRating() {
  return useInfiniteQuery({
    queryKey: productKeys.productsByRating,
    queryFn: ({ pageParam }) =>
      fetchProducts({ cursor: pageParam, order: 'rating' }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}

export function useFetchProductSearch(keyword: string) {
  return useQuery({
    queryKey: productKeys.productsBySearch(keyword),
    queryFn: () => fetchProducts({ keyword: keyword }),
  })
}

export function useFetchProductCategory(categoryId: CategoryId) {
  return useQuery({
    queryKey: productKeys.productsByCategory(categoryId),
    queryFn: () => fetchProducts({ category: categoryId }),
  })
}

export default function useFetchProductsByQuery(
  selectedCategoryKey: number | undefined,
  inputValue?: string,
) {
  return useSuspenseQuery({
    queryKey: ['fetchProducts', selectedCategoryKey, inputValue],
    queryFn: () =>
      fetchProducts({
        order: 'reviewCount',
        cursor: 0,
        keyword: inputValue,
        category: selectedCategoryKey,
      }),
    select: (data) => data?.list,
  })
}

export function useFetchProductDetail(
  productId: number,
  initialData?: ProductDetailResponse,
) {
  return useQuery({
    queryKey: productKeys.detail(productId),
    queryFn: () => fetchProductDetail({ productId }),
    initialData,
    enabled: !!productId,
  })
}
