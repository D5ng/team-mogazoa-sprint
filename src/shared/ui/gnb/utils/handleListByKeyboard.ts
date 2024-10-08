import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function handleListByKeyboard({
  suggestions,
  isToggle,
  handleClickList,
}: any) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length > 0 && isToggle) {
      if (e.key === 'ArrowDown') {
        setHighlightedIndex((prevIndex) =>
          prevIndex === suggestions.length - 1 ? 0 : prevIndex + 1,
        )
      } else if (e.key === 'ArrowUp') {
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1,
        )
      } else if (e.key === 'Enter' && highlightedIndex >= 0) {
        handleClickList(suggestions[highlightedIndex])
      }
    }
  }

  useEffect(() => {
    if (isToggle) {
      setHighlightedIndex(-1)
    }
  }, [isToggle])

  return { handleKeyDown, highlightedIndex }
}
