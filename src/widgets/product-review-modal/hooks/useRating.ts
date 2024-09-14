import { MouseEventHandler, useState } from 'react'
import { Control, useController } from 'react-hook-form'
import type { CreateReview, UpdateReview } from '@shared/types'

export default function useRating(
  control: Control<CreateReview> | Control<UpdateReview>,
) {
  const {
    field: { onChange, value },
  } = useController({ name: 'rating', control: control as any })

  const [clickedRating, setClickedRating] = useState(value || 1)
  const [virtualRating, setVirtualRating] = useState(value || 1)

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