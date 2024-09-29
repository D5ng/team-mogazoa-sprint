import { useEffect, useState } from 'react'
import { useCategoryQuery } from '@/src/shared/hooks'
import { useCompareStore } from '@app/provider/compareStore'
import useSearchProduct from '@/src/shared/hooks/useSearchProduct'
import useFetchProductsByQuery from '@/src/shared/hooks/query/product.query'
import useFetchProductSearch from '@/src/shared/hooks/query/product.query'
import { useSearchParams } from 'next/navigation'

export default function useProductAutocomplete(
  id: string,
  onCloseToggle?: () => void,
) {
  const _searchParams = useSearchParams()
  const searchParams = new URLSearchParams(_searchParams?.toString())
  const queryValue = searchParams.get('query')

  const { inputValues, setInputValues, selectedProducts, setSelectedProducts } =
    useCompareStore()

  const inputValue = queryValue || inputValues[id] || ''
  const selectedProduct = selectedProducts[id] || ''
  const [suggestions, setSuggestions] = useState<{ [key: string]: string[] }>(
    {},
  )
  const { updateInputValue } = useSearchProduct()

  const { category } = useCategoryQuery()

  const { data } = useFetchProductSearch(
    inputValue,
    category ? category.id : null,
  )

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
