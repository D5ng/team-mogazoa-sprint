import { CARD_MOCK_DATA } from '@/src/widgets/product/products-card/ProductCard.mock'
import { ProductCardData } from '@/src/widgets/product/products-card/ProductCard.types'
import { debounce } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

export default function useProduct() {
  const [inputValue, setInputValue] = useState('')
  const [selectedKey, setSelectedKey] = useState<number | null>(null)

  const handleSelect = (key: number) => {
    setSelectedKey(key)
  }

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
    handleSelect,
    selectedKey,
  }
}
