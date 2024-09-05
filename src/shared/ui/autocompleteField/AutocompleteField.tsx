import { createContext, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useAutocomplete, useToggle, useOutsideClick } from '@shared/hooks'
import type {
  AutocompleteContextType,
  AutocompleteDropdownItemProps,
  AutocompleteFieldProps,
  AutocompleteInputProps,
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
  ...props
}: AutocompleteFieldProps) {
  const { watch, setValue, register } = useForm()
  const searchTerm = watch('autocompleteInput', '')
  const { suggestions, highlightedIndex, handleKeyDown } = useAutocomplete({
    searchTerm,
    suggestionList,
    debounceTime: 300,
  })
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()
  const ref = useOutsideClick<HTMLDivElement>({ onCloseToggle })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('autocompleteInput', e.target.value)
    if (!isToggle) onOpenToggle()
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setValue('autocompleteInput', suggestion)
    onCloseToggle()
  }

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    const selectedSuggestion = handleKeyDown(e)
    if (selectedSuggestion) handleSuggestionSelect(selectedSuggestion)
  }

  return (
    <AutoCompleteInputContext.Provider
      value={{
        searchTerm,
        suggestions,
        highlightedIndex,
        isToggle,
        handleInputChange,
        handleInputKeyDown,
        handleSuggestionSelect,
        register,
      }}
    >
      <div ref={ref} className={`relative w-full ${props.className || ''}`}>
        {props.children}
      </div>
    </AutoCompleteInputContext.Provider>
  )
}

export function AutocompleteInput({ placeholder }: AutocompleteInputProps) {
  const { searchTerm, handleInputChange, handleInputKeyDown, register } =
    useAutocompleteContext()
  return (
    <input
      {...register('autocompleteInput')}
      value={searchTerm}
      onChange={handleInputChange}
      onKeyDown={handleInputKeyDown}
      placeholder={placeholder}
      className="w-full h-full px-5 rounded-lg text-white bg-black-60 border border-black-70 focus:ring-1 focus:ring-indigo focus:border-indigo placeholder:text-black-30 caret-white"
    />
  )
}

export function AutocompleteDropdown() {
  const { isToggle, suggestions } = useAutocompleteContext()
  if (!isToggle || !suggestions.length) return null
  return (
    <ul className="absolute w-full mt-1.5 bg-black-60 border border-black-70 rounded-lg z-dropdown">
      {suggestions.map((suggestion, index) => (
        <AutocompleteDropdownItem
          key={suggestion}
          suggestion={suggestion}
          index={index}
        />
      ))}
    </ul>
  )
}

function AutocompleteDropdownItem({
  suggestion,
  index,
}: AutocompleteDropdownItemProps) {
  const { highlightedIndex, handleSuggestionSelect } = useAutocompleteContext()
  const highlightClassName =
    highlightedIndex === index ? 'text-white' : 'text-black-30'
  return (
    <li
      onClick={() => handleSuggestionSelect(suggestion)}
      className={`p-2 cursor-pointer hover:bg-gray-700 ${highlightClassName}`}
    >
      {suggestion}
    </li>
  )
}
