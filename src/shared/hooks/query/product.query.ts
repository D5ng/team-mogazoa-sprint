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

// export function useFetchProductSearch(keyword: string) {
//   return useQuery({
//     queryKey: productKeys.productsBySearch(keyword),
//     queryFn: () => fetchProducts({ keyword: keyword }),
//     enabled: !!keyword,
//   })
// }

export default function useFetchProductSearch(
  keyword: string,
  categoryId: CategoryId | null,
) {
  const queryFn = categoryId
    ? fetchProducts({ keyword: keyword, category: categoryId })
    : fetchProducts({ keyword: keyword })
  return useQuery({
    queryKey: productKeys.productsBySearch(keyword, categoryId),
    queryFn: () => queryFn,
  })
}

export function useFetchProductCategory(
  categoryId: CategoryId,
  inputValue: string,
) {
  return useQuery({
    queryKey: productKeys.productsByCategory(categoryId, inputValue),
    queryFn: () => fetchProducts({ category: categoryId, keyword: inputValue }),
  })
}

export function useFetchProductsByQuery(
  keyword: string,
  categoryId: CategoryId | null,
) {
  const queryFn = categoryId
    ? fetchProducts({ keyword: keyword, category: categoryId })
    : fetchProducts({ keyword: keyword })
  return useSuspenseQuery({
    queryKey: productKeys.productsBySearch(keyword, categoryId),
    queryFn: () => queryFn,
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
