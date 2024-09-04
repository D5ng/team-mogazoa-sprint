import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

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

  const [suggestions, setSuggestions] = useState<string[]>([])
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  useEffect(() => {
    setSuggestions(
      searchTerm
        ? SUGGESTION_LIST.filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase()),
          )
        : [],
    )
    setHighlightedIndex(-1)
  }, [searchTerm])

  const handleAutocompleteKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestions.length) return

    const keyActions = {
      arrowDown: () =>
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev,
        ),
      arrowUp: () =>
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev)),
      enter: () => {
        if (highlightedIndex >= 0) {
          setValue('searchInput', suggestions[highlightedIndex])
          setSuggestions([])
        }
      },
    }

    const action = keyActions[e.key as keyof typeof keyActions]
    if (action) action()
  }

  return (
    <div className="p-2.5">
      <div className="flex p-4 border">
        <input
          {...register('searchInput')}
          className="flex-1 border border-white rounded-lg caret-white text-white bg-gray-800"
          onKeyDown={handleAutocompleteKeys}
        />
        <button
          onClick={() => setValue('searchInput', '')}
          className="text-white"
        >
          &times;
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="mt-1 bg-gray-800 border border-gray-700 rounded-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setValue('searchInput', suggestion)
                setSuggestions([])
              }}
              onMouseOver={() => setHighlightedIndex(index)}
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
