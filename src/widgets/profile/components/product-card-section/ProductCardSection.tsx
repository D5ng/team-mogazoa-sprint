import { useState } from 'react'
import {
  ReviewedProducts,
  RegisteredProducts,
  WishListedProducts,
} from '@widgets/profile/components'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants/ProductCategories.constant'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'
import useWindowResize from '@shared/hooks/useWindowResize'

export default function ProductCardSection() {
  const [activeCategory, setActiveCategory] = useState(
    PRODUCT_CATEGORIES[0].title,
  )
  const windowSize = useWindowResize()

  const componentMap = {
    ReviewedProducts,
    RegisteredProducts,
    WishListedProducts,
  }

  const ActiveComponent =
    componentMap[
      PRODUCT_CATEGORIES.find((category) => category.title === activeCategory)
        ?.componentName || 'ReviewedProducts'
    ]

  const isTablet = windowSize < 1024

  return (
    <section className="flex flex-col gap-4">
      {isTablet ? (
        <Dropdown variant="none">
          <DropdownTrigger className="whitespace-nowrap tablet:text-sm">
            {activeCategory}
          </DropdownTrigger>
          <DropdownMenu>
            {PRODUCT_CATEGORIES.map((category) => (
              <DropdownMenuItem
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
              >
                {category.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <div className="flex gap-4">
          {PRODUCT_CATEGORIES.map(({ title }) => {
            const isActive = activeCategory === title
            const textColor = isActive ? 'text-white' : 'text-black-30'

            return (
              <button
                key={title}
                onClick={() => setActiveCategory(title)}
                className={`text-xl whitespace-nowrap ${textColor}`}
              >
                {title}
              </button>
            )
          })}
        </div>
      )}
      <ActiveComponent />
    </section>
  )
}
