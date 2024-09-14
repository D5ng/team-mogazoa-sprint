import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchProductDetail, fetchProductsReviews } from '@shared/api'
import { FetchProductsReviews, ProductDetailResponse } from '@shared/types'

export function useFetchProductDetail(
  productId: number,
  initialData?: ProductDetailResponse,
) {
  return useQuery({
    queryKey: ['product-detail', productId],
    queryFn: () => fetchProductDetail({ productId }),
    initialData,
  })
}

export function useFetchProductReview({
  productId,
  order = 'recent',
}: FetchProductsReviews) {
  return useSuspenseInfiniteQuery({
    queryKey: ['product-detail-review', order],
    queryFn: ({ pageParam }) =>
      fetchProductsReviews({ productId, cursor: pageParam, order }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}