import { useState, useEffect, useCallback } from 'react'
import debounce from 'lodash/debounce'

interface UseAutocompleteParams {
  searchTerm: string
  suggestionList: string[]
  debounceTime?: number
}

export default function useAutocomplete({
  searchTerm,
  suggestionList,
  debounceTime = 300,
}: UseAutocompleteParams) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const debouncedUpdate = useCallback(
    debounce((term: string) => {
      if (!term) {
        setSuggestions([])
        return
      }
      const filteredSuggestions = suggestionList.filter((item) =>
        item.toLowerCase().includes(term.toLowerCase()),
      )
      setSuggestions(filteredSuggestions)
      setHighlightedIndex(-1)
    }, debounceTime),
    [suggestionList, debounceTime],
  )

  useEffect(() => {
    debouncedUpdate(searchTerm)

    return () => {
      debouncedUpdate.cancel()
    }
  }, [searchTerm, debouncedUpdate])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!suggestions.length) return null

    const keyActions: { [key: string]: () => string | null } = {
      ArrowDown: () => {
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, suggestions.length - 1),
        )
        return null
      },
      ArrowUp: () => {
        setHighlightedIndex((prev) => Math.max(prev - 1, 0))
        return null
      },
      Enter: () => suggestions[highlightedIndex] || null,
    }

    const action = keyActions[e.key]
    return action ? action() : null
  }

  return { suggestions, highlightedIndex, handleKeyDown }
}
