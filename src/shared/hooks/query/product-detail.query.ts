import {
  useInfiniteQuery,
  useQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query'
import { fetchProductDetail, fetchProductsReviews } from '@shared/api'
import { FetchProductsReviews, ProductDetailResponse } from '@shared/types'

export function useFetchProductDetail(
  productId: number,
  initialData?: ProductDetailResponse,
) {
  return useQuery({
    queryKey: ['product-detail'],
    queryFn: () => fetchProductDetail({ productId }),
    initialData,
  })
}

export function useFetchProductReview({
  productId,
  cursor,
  order,
}: FetchProductsReviews) {
  return useInfiniteQuery({
    queryKey: ['product-detail-review'],
    queryFn: ({ pageParam = 1 }) => fetchProductsReviews({ productId }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.nextCursor,
    getPreviousPageParam: (
      firstPage,
      allPages,
      firstPageParam,
      allPageParams,
    ) => firstPage.prevCursor,
  })
}
