import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormSetValue } from 'react-hook-form'

export interface AutocompleteFieldProps {
  suggestionList: string[]
  setValue: UseFormSetValue<any>
  name: string
  className?: string
  children: ReactNode
}

export interface AutocompleteInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
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
