import { useState, useCallback, useMemo } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import useDebounce from './useDebounce'

export default function useAutocomplete(
  suggestionList: string[],
  setValue: UseFormSetValue<any>,
  onOpenToggle: () => void,
  onCloseToggle: () => void,
) {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm)

  const suggestions = useMemo(() => {
    if (!debouncedSearchTerm) return []
    return suggestionList.filter((item) =>
      item.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    )
  }, [suggestionList, debouncedSearchTerm])

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        const value = e.target.value
        setSearchTerm(value)
        setValue('autocompleteInput', value)
        onOpenToggle()
      },
      [setValue, onOpenToggle],
    )

  const handleSuggestionSelect = useCallback(
    (suggestion: string) => {
      setSearchTerm(suggestion)
      setValue('autocompleteInput', suggestion)
      onCloseToggle()
    },
    [setValue, onCloseToggle],
  )

  return {
    searchTerm,
    suggestions,
    handleInputChange,
    handleSuggestionSelect,
  }
}
