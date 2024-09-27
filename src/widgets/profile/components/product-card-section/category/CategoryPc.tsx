import { PRODUCT_CATEGORIES } from '@widgets/profile/constants'
import type { CategorySelectorProps } from '@widgets/profile/types'

export default function CategoryPc({
  activeCategory,
  setActiveCategory,
}: CategorySelectorProps) {
  return (
    <div className="flex gap-4">
      {PRODUCT_CATEGORIES.map(({ title }) => (
        <button
          key={title}
          onClick={() => setActiveCategory(title)}
          className={`text-xl ${
            activeCategory === title ? 'text-white' : 'text-black-30'
          }`}
        >
          {title}
        </button>
      ))}
    </div>
  )
}
