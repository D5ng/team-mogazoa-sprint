import { useEffect, useState } from 'react'
import { useFetchProductSearch } from '@/src/shared/hooks'
import { useCompareStore } from '@app/provider/compareStore'
import useSearchProduct from '@/src/shared/hooks/useSearchProduct'

export default function useProductAutocomplete(
  id: string,
  onCloseToggle?: () => void,
) {
  const { inputValues, setInputValues, selectedProducts, setSelectedProducts } =
    useCompareStore()
  const inputValue = inputValues[id] || ''
  const selectedProduct = selectedProducts[id] || ''
  const [suggestions, setSuggestions] = useState<{ [key: string]: string[] }>(
    {},
  )
  const { updateInputValue } = useSearchProduct()

  const { data } = useFetchProductSearch(inputValue)

  console.log(inputValue)

  const { data: productData1 } = useFetchProductSearch(inputValues['상품1'])

  const handleClickList = (name: string) => {
    setInputValues(id, name)
    onCloseToggle && onCloseToggle()
    setSelectedProducts(id, name)
    updateInputValue(name)
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
    selectedProduct,
    deleteSelectedProduct,
    setSelectedProducts,
  }
}
