import { useEffect, useState } from 'react'
import { useFetchProductName } from '../../product/hooks/useProductName'
import { useCompareStore } from '@app/provider/compareStore'

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

  const { data } = useFetchProductName(inputValue)
  const { data: productData1 } = useFetchProductName(inputValues['상품1'])

  const handleClickList = (name: string) => {
    // if (
    //   productData1 &&
    //   productData1.list[0].categoryId !== data?.list[0]?.categoryId
    // ) {
    //   setInputValues(id, '')
    //   console.log('카테고리가 일치하지 않습니다.')
    //   return
    // }
    setInputValues(id, name)
    onCloseToggle && onCloseToggle()
    setSelectedProducts(id, name)
  }

  const handleInputChange = (value: string) => {
    setInputValues(id, value)
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
  }
}
