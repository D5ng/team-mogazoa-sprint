import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants'
import type { CategorySelectorProps } from '@widgets/profile/types'

export default function CategoryTablet({
  activeCategory,
  setActiveCategory,
}: CategorySelectorProps) {
  return (
    <Dropdown variant="none">
      <DropdownTrigger className="px-0 text-white whitespace-nowrap tablet:text-lg">
        {activeCategory}
      </DropdownTrigger>
      <DropdownMenu>
        {PRODUCT_CATEGORIES.map(({ title }) => (
          <DropdownMenuItem
            key={title}
            onClick={() => setActiveCategory(title)}
            className={`text-xl ${
              activeCategory === title ? 'text-white' : 'text-black-30'
            }`}
          >
            {title}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
