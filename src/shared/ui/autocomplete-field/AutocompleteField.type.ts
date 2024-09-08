import { ReactNode } from 'react'
import { UseFormRegister } from 'react-hook-form'

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
  isOpen: boolean
  onOpenToggle: () => void
  onCloseToggle: () => void
  register: UseFormRegister<any>
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSuggestionSelect: (suggestion: string) => void
  highlightedIndex: number
  setHighlightedIndex: (index: number | ((prevIndex: number) => number)) => void
}
