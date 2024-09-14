import { useProductStore } from '@/src/shared/store/productStore'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../api'

export default function useProduct() {
  const {
    inputValue,
    selectedCategoryKey,
    handleInputValue,
    handleSelectedCategoryKey,
    handleSelectedCategoryName,
    selectedCategoryName,
  } = useProductStore()
  const [searchTitle, setSearchTitle] = useState<string>('')

  const updateInputValue = useCallback(
    debounce((value: string) => {
      handleInputValue(value)
    }, 300),
    [],
  )

  const handleCategory = (id: number, name: string) => {
    if (id === selectedCategoryKey) {
      handleSelectedCategoryKey(undefined)
      return
    }
    handleSelectedCategoryKey(id)
    handleSelectedCategoryName(name)
  }

  const resetProducts = () => {
    handleInputValue('')
    handleSelectedCategoryKey(undefined)
  }

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
    select: (data) => data?.list.slice(0, 6),
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

  useEffect(() => {
    if (selectedCategoryKey && !inputValue) {
      setSearchTitle(`${selectedCategoryName}의 모든상품`)
    }
    if (!selectedCategoryKey && inputValue) {
      setSearchTitle(`'${inputValue}'로 검색한 상품`)
    }
    if (selectedCategoryKey && inputValue) {
      setSearchTitle(`${selectedCategoryName}의 ${inputValue}로 검색한 상품`)
    }
  }, [selectedCategoryKey, inputValue])

  return {
    hotProducts,
    ratedProducts,
    updateInputValue,
    selectedCategoryKey,
    filteredProducts,
    inputValue,
    searchTitle,
    resetProducts,
    handleCategory,
  }
}
