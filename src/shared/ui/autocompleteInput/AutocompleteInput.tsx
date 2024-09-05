import { useForm } from 'react-hook-form'
import AutocompleteSuggestions from '@shared/ui/autocompleteSuggestions/AutocompleteSuggestions'
import { useAutocomplete, useToggle, useOutsideClick } from '@shared/hooks'
import type { AutocompleteInputProps } from './AutocompleteInput.type'

export default function AutocompleteTextFieldInput({
  placeholder,
  suggestionList,
  ...props
}: AutocompleteInputProps) {
  const { register, watch, setValue } = useForm()
  const searchTerm = watch('autocompleteInput', '')

  const { suggestions, highlightedIndex, handleKeyDown } = useAutocomplete({
    searchTerm,
    suggestionList,
    debounceTime: 300,
  })
  const { isToggle, onOpenToggle, onCloseToggle } = useToggle()

  const ref = useOutsideClick<HTMLDivElement>({ onCloseToggle })

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    const selectedSuggestion = handleKeyDown(e)
    if (selectedSuggestion) {
      handleSuggestionSelect(selectedSuggestion)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('autocompleteInput', e.target.value)
    if (!isToggle) {
      onOpenToggle()
    }
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setValue('autocompleteInput', suggestion)
    onCloseToggle()
  }

  return (
    <div ref={ref} className={`relative w-full ${props.className}`}>
      <input
        {...register('autocompleteInput')}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onFocus={onOpenToggle}
        placeholder={placeholder}
        className="w-full h-full px-5 rounded-lg text-white bg-black-60 border border-black-70 focus:ring-1 focus:ring-indigo focus:border-indigo placeholder:text-black-30 caret-white"
      />
      {isToggle && suggestions.length > 0 && (
        <AutocompleteSuggestions
          suggestions={suggestions}
          highlightedIndex={highlightedIndex}
          onSuggestionClick={handleSuggestionSelect}
        />
      )}
    </div>
  )
}
