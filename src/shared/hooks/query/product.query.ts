import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../../api'
import { useProductStore } from '../../store/productStore'
import { FetchProducts } from '../../types'

export function useFetchProductsRating() {
  return useQuery({
    queryKey: ['fetchProducts', 'ratedCount'],
    queryFn: () => fetchProducts({ order: 'rating' }),
    select: (data) => data?.list.slice(0, 6),
  })
}

export function useFetchProductsHot() {
  return useQuery({
    queryKey: ['fetchProducts', 'reviewCount'],
    queryFn: () => fetchProducts({ order: 'reviewCount' }),
    select: (data) => {
      const transformedData = data.list ?? []
      return transformedData.slice(0, 6)
    },
  })
}

export default function useFetchProductsByQuery() {
  const { inputValue, selectedCategoryKey } = useProductStore()
  return useQuery({
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

export function useFetchProducts() {
  return useInfiniteQuery({
    queryKey: ['fetchProducts', 'ratedCount'],
    queryFn: ({ pageParam }) =>
      fetchProducts({ cursor: pageParam, order: 'rating' }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor || null,
    select: (data) => (data.pages ?? []).flatMap((page) => page.list),
  })
}
