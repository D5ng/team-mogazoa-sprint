import { useState, useEffect } from 'react'

export default function useAutocomplete(
  searchTerm: string,
  suggestionList: string[],
) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  useEffect(() => {
    setSuggestions(
      searchTerm
        ? suggestionList.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase()),
          )
        : [],
    )
    setHighlightedIndex(-1)
  }, [searchTerm, suggestionList])

  function handleAutocompleteKeys(e: React.KeyboardEvent) {
    if (!suggestions.length) return null

    const keyActions = {
      arrowDown: () =>
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev,
        ),
      arrowUp: () =>
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev)),
      enter: () => {
        if (highlightedIndex >= 0) {
          return suggestions[highlightedIndex]
        }
        return null
      },
    }

    const action = keyActions[e.key as keyof typeof keyActions]
    return action ? action() : null
  }

  function clearSuggestions() {
    setSuggestions([])
    setHighlightedIndex(-1)
  }

  return {
    suggestions,
    highlightedIndex,
    handleAutocompleteKeys,
    clearSuggestions,
  }
}
