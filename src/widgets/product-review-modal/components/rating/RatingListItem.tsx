import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { star, emptyStar } from '@shared/icons'

interface RatingListItemProps {
  onClick: (currentIndex: number) => void
  currentIndex: number
  rating: number
  onMouseEnter: MouseEventHandler
  onMouseLeave: () => void
}

export default function RatingListItem({
  currentIndex,
  onClick,
  rating,
  onMouseEnter,
  onMouseLeave,
}: RatingListItemProps) {
  const onUpdateRating = () => onClick(currentIndex)
  const iconSource = currentIndex <= rating ? star : emptyStar
  return (
    <li
      className="relative w-8 h-8 pr-[5px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-idx={currentIndex}
    >
      <button className="block w-full h-full" onClick={onUpdateRating}>
        <Image src={iconSource} alt="" fill />
      </button>
    </li>
  )
}
