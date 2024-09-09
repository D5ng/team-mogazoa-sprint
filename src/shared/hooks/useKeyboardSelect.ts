export default function useKeyboardSelect(
  suggestions: string[],
  highlightedIndex: number,
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>,
  handleSuggestionSelect: (suggestion: string) => void,
) {
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!suggestions.length) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0,
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1,
        )
        break
      case 'Enter':
        e.preventDefault()
        if (highlightedIndex >= 0) {
          handleSuggestionSelect(suggestions[highlightedIndex])
        }
        setHighlightedIndex(-1)
        break
      case 'Escape':
        setHighlightedIndex(-1)
        handleSuggestionSelect('')
        break
      case 'Backspace':
        setHighlightedIndex(0)
        break
    }
  }

  return handleKeyDown
}
