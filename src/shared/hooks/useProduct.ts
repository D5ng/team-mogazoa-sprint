import { CARD_MOCK_DATA } from '@/src/widgets/product/products-card/ProductCard.mock'
import { ProductCardData } from '@/src/widgets/product/products-card/ProductCard.types'
import { useEffect, useRef, useState } from 'react'

export default function useProduct() {
  const ref = useRef<HTMLInputElement | null>(null)
  const [filteredProducts, setFilteredProducts] =
    useState<ProductCardData>(CARD_MOCK_DATA)

  const searchValue = ref.current?.value || ''
  // console.log(searchValue)

  useEffect(() => {
    const filtered = CARD_MOCK_DATA.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    setFilteredProducts(filtered)
  }, [searchValue])

  return { ref, filteredProducts }
}
