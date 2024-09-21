import { useProductStore } from '@shared/store/productStore'
import { debounce } from 'lodash'
import { useCallback, useState } from 'react'

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
