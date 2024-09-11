import { useProductStore } from '@/src/app/provider/productStore'
import { CARD_MOCK_DATA } from '@/src/widgets/product/products-card/ProductCard.mock'
import { ProductCardData } from '@/src/widgets/product/products-card/ProductCard.types'
import { debounce } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

export default function useProduct() {
  const { inputValue, selectedKey, setInputValue } = useProductStore()

  const updateInputValue = useCallback(
    debounce((value: string) => {
      setInputValue(value)
    }, 300),
    [],
  )

  const filteredProducts = useMemo(() => {
    return CARD_MOCK_DATA.filter((product) =>
      product?.name.toLowerCase().includes(inputValue.toLowerCase()),
    )
  }, [inputValue])

  return {
    filteredProducts,
    updateInputValue,
    inputValue,
    selectedKey,
  }
}
