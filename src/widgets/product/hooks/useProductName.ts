import { fetchProducts } from '@/src/shared/api'
import { useQuery } from '@tanstack/react-query'

export function useFetchProductName(productName: string) {
  return useQuery({
    queryKey: ['product', productName],
    queryFn: () => fetchProducts({ keyword: productName }),
  })
}
