import { useProductStore } from '@/src/shared/store/productStore'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../api'

export default function useProduct() {
  const {
    inputValue,
    selectedKey,
    setInputValue,
    setSelectedKey,
    setSelectedName,
    selectedName,
  } = useProductStore()
  const [searchTitle, setSearchTitle] = useState<string>('')
  // const { data, isLoading, error } = useQuery<ProductResponse, Error>({
  //   queryKey: ['fetchProductCard', selectedKey, inputValue],
  //   queryFn: () =>
  //     fetchProducts({ keyword: inputValue, category: selectedKey }),
  // })

  const updateInputValue = useCallback(
    debounce((value: string) => {
      setInputValue(value)
    }, 300),
    [],
  )

  const handleCategory = (id: number, name: string) => {
    setSelectedKey(id)
    setSelectedName(name)
  }

  const resetProducts = () => {
    setInputValue('')
    setSelectedKey(undefined)
  }

  const { data: hotProducts } = useQuery({
    queryKey: ['fetchProducts', 'reviewCount'],
    queryFn: () =>
      fetchProducts({
        order: 'reviewCount',
        cursor: 0,
      }),
    enabled: !inputValue && !selectedKey,
    select: (data) => data?.list.slice(0, 6),
  })

  const { data: ratedProducts } = useQuery({
    queryKey: ['fetchProducts', 'ratedCount'],
    queryFn: () =>
      fetchProducts({
        order: 'rating',
        cursor: 0,
      }),
    enabled: !inputValue && !selectedKey,
    select: (data) => data?.list.slice(0, 6),
  })

  const { data: filteredProducts } = useQuery({
    queryKey: ['fetchProducts', selectedKey, inputValue],
    queryFn: () =>
      fetchProducts({
        order: 'reviewCount',
        cursor: 0,
        keyword: inputValue,
        category: selectedKey,
      }),
    select: (data) => data?.list,
  })

  //   // 최신순 데이터 요청 (무한스크롤 적용)
  //   const {
  //     data: recentProducts,
  //     fetchNextPage: fetchNextRecentPage,
  //     hasNextPage: hasNextRecentPage,
  //   } = useInfiniteQuery<
  //   AxiosResponse,
  //   AxiosError,
  //   ProductResponse
  // >(
  //     ['fetchProducts', 'recent'],
  //     ({ pageParam = 0 }) =>
  //       fetchProducts({
  //         order: 'recent',
  //         cursor: pageParam, // 무한스크롤을 위한 cursor 값 사용
  //       }),
  //     }
  //   );

  useEffect(() => {
    if (selectedKey && !inputValue) {
      setSearchTitle(`${selectedName}의 모든상품`)
    }
    if (!selectedKey && inputValue) {
      setSearchTitle(`'${inputValue}'로 검색한 상품`)
    }
    if (selectedKey && inputValue) {
      setSearchTitle(`${selectedName}의 ${inputValue}로 검색한 상품`)
    }
  }, [selectedKey, inputValue])

  return {
    hotProducts,
    ratedProducts,
    updateInputValue,
    selectedKey,
    filteredProducts,
    inputValue,
    searchTitle,
    resetProducts,
    handleCategory,
  }
}
