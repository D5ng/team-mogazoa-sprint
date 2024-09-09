import React, { createContext, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAutocomplete, useKeyboardSelect } from '@shared/hooks'
import type {
  AutocompleteContextType,
  AutocompleteFieldProps,
  AutocompleteInputProps,
  AutocompleteDropdownItemProps,
} from './AutocompleteField.type'

const AutoCompleteInputContext = createContext<AutocompleteContextType | null>(
  null,
)

const useAutocompleteContext = () => {
  const context = useContext(AutoCompleteInputContext)
  if (!context) throw new Error('AutoCompleteInputContext에서 사용해주세요.')
  return context
}

export function AutocompleteField({
  suggestionList,
  children,
  ...props
}: AutocompleteFieldProps) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const { setValue } = useForm()
  const autocomplete = useAutocomplete(suggestionList, setValue)

  const contextValue = {
    ...autocomplete,
    highlightedIndex,
    setHighlightedIndex,
  }

  return (
    <AutoCompleteInputContext.Provider value={contextValue}>
      <div className={`relative w-full ${props.className || ''}`}>
        {children}
      </div>
    </AutoCompleteInputContext.Provider>
  )
}

export function AutocompleteInput({ placeholder }: AutocompleteInputProps) {
  const {
    searchTerm,
    handleInputChange,
    suggestions,
    handleSuggestionSelect,
    highlightedIndex,
    setHighlightedIndex,
  } = useAutocompleteContext()

  const handleKeyDown = useKeyboardSelect(
    suggestions,
    highlightedIndex,
    setHighlightedIndex,
    handleSuggestionSelect,
  )

  return (
    <input
      value={searchTerm}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className="input-base"
    />
  )
}

export function AutocompleteDropdown() {
  const { suggestions, highlightedIndex } = useAutocompleteContext()

  if (!suggestions.length) return null

  return (
    <ul className="absolute w-full mt-1.5 bg-black-60 border border-black-70 rounded-lg z-dropdown">
      {suggestions.map((suggestion, index) => (
        <AutocompleteDropdownItem
          key={suggestion}
          suggestion={suggestion}
          isHighlighted={index === highlightedIndex}
        />
      ))}
    </ul>
  )
}

export function AutocompleteDropdownItem({
  suggestion,
  isHighlighted,
}: AutocompleteDropdownItemProps) {
  const { handleSuggestionSelect } = useAutocompleteContext()
  const highlightClassName = isHighlighted
    ? 'bg-gray-70 text-white'
    : 'text-black-30'

  const handleClick = () => {
    handleSuggestionSelect(suggestion)
  }

  return (
    <li
      onClick={handleClick}
      className={`p-2 cursor-pointer hover:bg-gray-60 ${highlightClassName}`}
    >
      {suggestion}
    </li>
  )
}
