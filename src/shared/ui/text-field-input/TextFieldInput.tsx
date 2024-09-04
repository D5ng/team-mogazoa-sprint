import { useForm } from 'react-hook-form'
import AutocompleteSuggestions from '@/src/shared/ui/autocompleteSuggestions/AutocompleteSuggestions'
import { useAutocomplete, useToggle, useOutsideClick } from '@/src/shared/hooks'
import type { TextFieldInputProps } from '@/src/shared/ui/text-field-input/TextFieldInput.type'

const SUGGESTION_LIST = [
  'Air Pods Max',
  'Air Pods 1',
  'Air Pods Pro',
  'Air Pods Pro 2',
  '갤럭시 S24',
  '갤럭시 S24 Ultra',
  '갤럭시 Z 플립 5',
  '갤럭시 Z 폴드 6',
]

export default function TextFieldInput({
  placeholder,
  ...props
}: TextFieldInputProps) {
  const { register, watch, setValue } = useForm()
  const searchTerm = watch('searchInput', '')

  const { suggestions, highlightedIndex, handleKeyDown } = useAutocomplete({
    searchTerm,
    suggestionList: SUGGESTION_LIST,
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
    setValue('searchInput', e.target.value)
    if (!isToggle) {
      onOpenToggle()
    }
  }

  const handleSuggestionSelect = (suggestion: string) => {
    setValue('searchInput', suggestion)
    onCloseToggle()
  }

  return (
    <div ref={ref} className={`relative w-full ${props.className}`}>
      <input
        {...register('searchInput')}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onFocus={onOpenToggle}
        placeholder={placeholder}
        className="w-full h-full px-5 rounded-lg text-white bg-black-60 border border-black-70 focus:ring-1 focus:ring-indigo focus:border-indigo placeholder:text-black-30 caret-white"
      />
      <button
        onClick={() => {
          setValue('searchInput', '')
          onCloseToggle()
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
      >
        ×
      </button>
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
