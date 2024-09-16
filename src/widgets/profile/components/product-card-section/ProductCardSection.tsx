import { useState } from 'react'
import useWindowResize from '@shared/hooks/useWindowResize'
import {
  ReviewedProducts,
  RegisteredProducts,
  WishListedProducts,
} from '@widgets/profile/components'
import { CategoryPc, CategoryTablet } from '@widgets/profile/components/'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants/ProductCategories.constant'
import type { CategoryTitle } from '@widgets/profile/types/Category.type'

export default function ProductCardSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryTitle>(
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

  return (
    <section className="flex flex-col gap-4">
      {windowSize < 1024 ? (
        <CategoryTablet
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      ) : (
        <CategoryPc
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      <ActiveComponent />
    </section>
  )
}
