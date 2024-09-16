import { useEffect, useState } from 'react'
import { useFetchProductName } from '../../product/hooks/useProductName'
import { useCompareStore } from '@/src/app/provider/compareStore'

export default function useProductAutocomplete(
  id: string,
  onCloseToggle?: () => void,
) {
  const { inputValues, setInputValues } = useCompareStore()
  const inputValue = inputValues[id] || ''
  const [suggestions, setSuggestions] = useState<{ [key: string]: string[] }>(
    {},
  )
  const [selectedProduct, setSelectedProduct] = useState('')

  const { data } = useFetchProductName(inputValue)

  const handleClickList = (name: string) => {
    setInputValues(id, name)
    onCloseToggle && onCloseToggle()
    setSelectedProduct(name)
  }

  const handleInputChange = (value: string) => {
    setInputValues(id, value)
  }

  const deleteSelectedProduct = () => {
    setSelectedProduct('')
    setInputValues(id, '')
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
  }
}
