import {
  CATEGORY_CHIPS,
  CATEGORY_COLOR_VARIANTS,
} from './CategoryChip.constants'

interface CategoryChipProps {
  name: string
}

export default function CategoryChip({ name }: CategoryChipProps) {
  const category = CATEGORY_CHIPS.find((category) => category === name)
  if (!category)
    throw new Error('카테고리가 일치하지 않아요. 다시 확인해주세요.')

  const className = `px-2.5 py-1 rounded-lg ${CATEGORY_COLOR_VARIANTS[category]}`
  return <span className={className}>{name}</span>
}
