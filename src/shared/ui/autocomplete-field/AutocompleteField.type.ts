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
  register: UseFormRegister<any>
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSuggestionSelect: (suggestion: string) => void
  onOpenToggle: React.Dispatch<React.SetStateAction<boolean>>
  highlightedIndex: number
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>
}
