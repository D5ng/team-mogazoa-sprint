import { useState, useEffect } from 'react'

interface UseAutocompleteParams {
  searchTerm: string
  suggestionList: string[]
}

export default function useAutocomplete({
  searchTerm,
  suggestionList,
}: UseAutocompleteParams) {
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
