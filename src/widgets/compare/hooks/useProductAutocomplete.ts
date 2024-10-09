import { useEffect, useState } from 'react'
import { useFetchProductSearch } from '@/src/shared/hooks'
import { useCompareStore } from '@app/provider/compareStore'
import useSearchProduct from '@/src/shared/hooks/useSearchProduct'
import { useProductStore } from '@/src/shared/store/productStore'
import { useRouter } from 'next/router'
import useFetchProductsByQuery from '@/src/shared/hooks/query/product.query'

export default function useProductAutocomplete(
  id: string,
  onCloseToggle?: () => void,
) {
  const { inputValues, setInputValues, selectedProducts, setSelectedProducts } =
    useCompareStore()
  const { inputValue: valueTest } = useProductStore()
  const inputValue = inputValues[id] || ''
  const selectedProduct = selectedProducts[id] || ''
  const [suggestions, setSuggestions] = useState<{ [key: string]: string[] }>(
    {},
  )
  const router = useRouter()

  const { updateInputValue, selectedCategoryKey } = useSearchProduct()

  const { data } = useFetchProductSearch(valueTest, selectedCategoryKey)
  const { data: compareData } = useFetchProductSearch(selectedProduct)

  const handleClickList = (name: string) => {
    setInputValues(id, name)
    onCloseToggle && onCloseToggle()
    setSelectedProducts(id, name)
    updateInputValue(name)
    if (router.pathname !== '/compare') {
      router.push(`/?product=${name}`)
    }
  }

  const handleInputChange = (value: string) => {
    setInputValues(id, value)
    updateInputValue(value)
  }

  const deleteSelectedProduct = () => {
    setInputValues(id, '')
    setSelectedProducts(id, '')
  }

  useEffect(() => {
    if (data && data.list) {
      const productNames = data.list.map((product) => product.name)

      setSuggestions((prev) => ({ ...prev, [id]: productNames }))
    }
  }, [data, id])

  return {
    inputValue,
    suggestions: suggestions[id] || [],
    handleClickList,
    handleInputChange,
    data,
    compareData,
    selectedProduct,
    deleteSelectedProduct,
    setSelectedProducts,
  }
}
