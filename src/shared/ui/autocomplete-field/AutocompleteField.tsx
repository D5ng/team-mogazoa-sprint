import React, { createContext, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAutocomplete, useToggle } from '@shared/hooks'

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
  debounceDelay = 300,
  children,
  ...props
}: AutocompleteFieldProps) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const { register, setValue } = useForm()
  const { isToggle: isOpen, onOpenToggle, onCloseToggle } = useToggle()
  const autocomplete = useAutocomplete(
    suggestionList,
    debounceDelay,
    setValue,
    onOpenToggle,
    onCloseToggle,
  )

  const contextValue = {
    ...autocomplete,
    register,
    isOpen,
    onOpenToggle,
    onCloseToggle,
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
    register,
    handleInputChange,
    suggestions,
    isOpen,
    onOpenToggle,
    onCloseToggle,
    handleSuggestionSelect,
    highlightedIndex,
    setHighlightedIndex,
  } = useAutocompleteContext()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) {
      onOpenToggle()
      return
    }

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
        onCloseToggle()
        break
      case 'Escape':
        setHighlightedIndex(-1)
        onCloseToggle()
        break
    }
  }

  return (
    <input
      {...register('autocompleteInput')}
      value={searchTerm}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      className="input-base"
    />
  )
}

export function AutocompleteDropdown() {
  const { isOpen, suggestions, highlightedIndex } = useAutocompleteContext()

  if (!isOpen || !suggestions.length) return null

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
  const { handleSuggestionSelect, onCloseToggle } = useAutocompleteContext()
  const highlightClassName = isHighlighted
    ? 'bg-gray-70 text-white'
    : 'text-black-30'

  const handleClick = () => {
    handleSuggestionSelect(suggestion)
    onCloseToggle()
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
