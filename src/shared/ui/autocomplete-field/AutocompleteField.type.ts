import { ReactNode } from 'react'
import { UseFormSetValue } from 'react-hook-form'

//TODO: 우혁님 여기 UseFormSetValue 제네릭과 name의 any값에 setValue이용하는 타입 넣어주시면 됩니다!
export interface AutocompleteFieldProps {
  suggestionList: string[]
  setValue: UseFormSetValue<any>
  name: keyof any
  className?: string
  children: ReactNode
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
