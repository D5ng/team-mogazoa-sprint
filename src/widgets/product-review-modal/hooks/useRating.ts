import { MouseEventHandler, useState } from 'react'
import { Control, useController } from 'react-hook-form'
import type { CreateReview } from '@shared/types'

export default function useRating(control: Control<CreateReview>) {
  const {
    field: { onChange },
  } = useController({ name: 'rating', control })
  const [clickedRating, setClickedRating] = useState(1)
  const [virtualRating, setVirtualRating] = useState(1)

  const handleClick = (currentIndex: number) => {
    setVirtualRating(currentIndex)
    setClickedRating(currentIndex)
    onChange(currentIndex)
  }

  const handleMouseEnter: MouseEventHandler = (event) => {
    const ratingIndex = +(event.currentTarget as HTMLLIElement).dataset.idx!
    setVirtualRating(ratingIndex)
  }

  const handleMouseLeave = () => setVirtualRating(clickedRating)

  return {
    clickedRating,
    virtualRating,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  }
}
