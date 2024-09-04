export interface AutocompleteSuggestionsProps {
  suggestions: string[]
  highlightedIndex: number
  onSuggestionClick: (suggestion: string) => void
}
