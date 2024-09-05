import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

export interface AutocompleteContextType {
  searchTerm: string
  suggestions: string[]
  highlightedIndex: number
  isToggle: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleInputKeyDown: (e: React.KeyboardEvent) => void
  handleSuggestionSelect: (suggestion: string) => void
  register: ReturnType<typeof useForm>['register']
}

export interface AutocompleteFieldProps {
  children: ReactNode
  suggestionList: string[]
  className?: string
}

export interface AutocompleteInputProps {
  placeholder?: string
}

export interface AutocompleteDropdownItemProps {
  suggestion: string
  index: number
}
