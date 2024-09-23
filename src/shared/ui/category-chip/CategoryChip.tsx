import {
  CATEGORY_CHIPS,
  CATEGORY_COLOR_VARIANTS,
} from './CategoryChip.constants'

interface CategoryChipProps {
  name: string | null
}

export default function CategoryChip({ name }: CategoryChipProps) {
  const categoryName = name || '없음'
  const category = CATEGORY_CHIPS.find(
    (category) => category.name === categoryName,
  )

  if (!category) {
    throw new Error('카테고리가 일치하지 않아요. 다시 확인해주세요.')
  }

  const className = `px-2.5 py-1 rounded-lg tablet:text-xs tablet:px-2 ${CATEGORY_COLOR_VARIANTS[categoryName]}`
  return <span className={className}>{categoryName}</span>
}
