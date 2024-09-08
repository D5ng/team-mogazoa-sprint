import type { AutocompleteSuggestionsProps } from './AutocompleteSuggestions.type'

export default function AutocompleteSuggestions({
  suggestions,
  highlightedIndex,
  onSuggestionClick,
}: AutocompleteSuggestionsProps) {
  if (suggestions.length === 0) return null

  return (
    <ul className="absolute w-full mt-1.5 bg-black-60 border border-black-70 rounded-lg z-dropdown ">
      {suggestions.map((suggestion, index) => (
        <li
          key={suggestion}
          onClick={() => onSuggestionClick(suggestion)}
          className={`p-2 cursor-pointer hover:bg-gray-700 ${
            highlightedIndex === index
              ? 'bg-blue-500 text-white'
              : 'text-black-30'
          }`}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  )
}
