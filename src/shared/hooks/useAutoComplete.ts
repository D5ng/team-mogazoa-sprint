import { useState, useCallback, useMemo } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import useDebounce from './useDebounce'
import useToggle from './useToggle'
import useOutsideClick from './useOutsideClick'

export default function useAutocomplete(
  suggestionList: string[],
  debounceDelay: number,
  setValue: UseFormSetValue<any>,
) {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay)

  const { isToggle: isOpen, onOpenToggle, onCloseToggle } = useToggle()
  const ref = useOutsideClick<HTMLDivElement>({ onCloseToggle })

  const suggestions = useMemo(() => {
    if (!debouncedSearchTerm) return []
    return suggestionList.filter((item) =>
      item.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    )
  }, [suggestionList, debouncedSearchTerm])

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
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
    isOpen,
    onOpenToggle,
    handleInputChange,
    handleSuggestionSelect,
    ref,
  }
}
