import { useQuery } from '@tanstack/react-query'
import { fetchProductDetail } from '@shared/api'
import { ProductDetailResponse } from '@shared/types'

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
