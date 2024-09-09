import { ReactNode } from 'react'

export interface AutocompleteFieldProps {
  suggestionList: string[]
  className?: string
  children: ReactNode
  debounceDelay?: number
}

export interface AutocompleteInputProps {
  placeholder?: string
}

export interface AutocompleteDropdownItemProps {
  suggestion: string
  isHighlighted: boolean
}

export interface AutocompleteContextType {
  searchTerm: string
  suggestions: string[]
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSuggestionSelect: (suggestion: string) => void
  highlightedIndex: number
  setHighlightedIndex: (index: number | ((prevIndex: number) => number)) => void
}
