import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { fetchProductsReviews } from '@shared/api'
import { FetchProductsReviews } from '@shared/types'
import { productKeys } from '../query-keys'

export function useFetchProductReview({
  productId,
  order = 'recent',
}: FetchProductsReviews) {
  return useSuspenseInfiniteQuery({
    queryKey: productKeys.reviews(productId, order),
    queryFn: ({ pageParam }) =>
      fetchProductsReviews({ productId, cursor: pageParam, order }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}
