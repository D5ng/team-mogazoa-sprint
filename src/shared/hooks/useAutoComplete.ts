import { useState, useEffect } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { debounce } from 'lodash'
import useProduct from './useProduct'
import { useProductStore } from '@/src/shared/store/productStore'

export default function useAutocomplete(
  suggestionList: string[],
  setValue: UseFormSetValue<any>,
) {
  const [searchTerm, setSearchTerm] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const { setInputValue } = useProductStore()

  const debounceFilter = debounce((term: string) => {
    if (!term) {
      setSuggestions([])
      return
    }
    const filtered = suggestionList.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase()),
    )
    setSuggestions(filtered)
  }, 300)

  useEffect(() => {
    return () => {
      debounceFilter.cancel()
    }
  }, [])

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    setValue('autocompleteInput', value)
    debounceFilter(value)
    setInputValue(value)
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setSearchTerm(suggestion)
    setValue('autocompleteInput', suggestion)
    setSuggestions([])
  }

  return {
    searchTerm,
    suggestions,
    handleInputChange,
    handleSuggestionSelect,
  }
}
