import { PRODUCT_CATEGORIES } from '@widgets/profile/constants/ProductCategories.constant'
import type { CategorySelectorProps } from '@/src/widgets/profile/types/Category.type'

export default function CategoryButtons({
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
