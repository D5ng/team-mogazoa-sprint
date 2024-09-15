import {
  useInfiniteQuery,
  useQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query'
import { fetchProducts } from '../../api'
import { useProductStore } from '../../store/productStore'
import { FetchProducts } from '../../types'

export default function fetchProductsByQuery() {
  const { inputValue, selectedCategoryKey } = useProductStore()
  const { data: hotProducts } = useQuery({
    queryKey: ['fetchProducts', 'reviewCount'],
    queryFn: () =>
      fetchProducts({
        order: 'reviewCount',
        cursor: 0,
      }),
    enabled: !inputValue && !selectedCategoryKey,
    select: (data) => data?.list.slice(0, 6),
  })

  const { data: ratedProducts } = useQuery({
    queryKey: ['fetchProducts', 'ratedCount'],
    queryFn: () =>
      fetchProducts({
        order: 'rating',
        cursor: 0,
      }),
    enabled: !inputValue && !selectedCategoryKey,
    // select: (data) => data?.list.slice(0, 6),
  })

  const { data: filteredProducts } = useQuery({
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

  return { hotProducts, filteredProducts, ratedProducts }
}

export function useFetchNextProduct() {
  return useInfiniteQuery({
    queryKey: ['fetchProducts', 'ratedCount'],
    queryFn: ({ pageParam }) =>
      fetchProducts({ cursor: pageParam, order: 'rating' }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}
