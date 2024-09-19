import { useProductStore } from '@shared/store/productStore'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../api'

export default function useSearchProduct() {
  const {
    selectedCategoryKey,
    handleInputValue,
    handleSelectedCategoryKey,
    handleSelectedCategoryName,
  } = useProductStore()

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

  return {
    updateInputValue,
    selectedCategoryKey,
    resetProducts,
    handleCategory,
  }
}
