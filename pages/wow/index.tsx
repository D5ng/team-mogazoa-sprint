import { useForm } from 'react-hook-form'
import { useAutocomplete } from '@/src/shared/hooks'

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

export default function AutoComplete() {
  const { register, watch, setValue } = useForm()
  const searchTerm = watch('searchInput', '')

  const {
    suggestions,
    highlightedIndex,
    handleAutocompleteKeys,
    clearSuggestions,
  } = useAutocomplete(searchTerm, SUGGESTION_LIST)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const selectedSuggestion = handleAutocompleteKeys(e)
    if (selectedSuggestion) {
      setValue('searchInput', selectedSuggestion)
      clearSuggestions()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setValue('searchInput', suggestion)
    clearSuggestions()
  }

  return (
    <div className="p-2.5">
      <div className="flex p-4 border">
        <input
          {...register('searchInput')}
          className="flex-1 border border-white rounded-lg caret-white text-white bg-gray-800"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => {
            setValue('searchInput', '')
            clearSuggestions()
          }}
          className="text-white"
        >
          ×
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="mt-1 bg-gray-800 border border-gray-700 rounded-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`p-2 cursor-pointer hover:bg-gray-700 ${
                highlightedIndex === index
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-300'
              }`}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
