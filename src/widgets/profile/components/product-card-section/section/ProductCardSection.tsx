import { useState } from 'react'
import useWindowResize from '@shared/hooks/useWindowResize'
import {
  ReviewedProducts,
  CreatedProducts,
  FavoriteProducts,
} from '@widgets/profile/components'
import { CategoryPc, CategoryTablet } from '@widgets/profile/components/'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants'
import type { UserId } from '@shared/types'
import type { CategoryTitle } from '@widgets/profile/types'

export default function ProductCardSection({ userId }: UserId) {
  const [activeCategory, setActiveCategory] = useState<CategoryTitle>(
    PRODUCT_CATEGORIES[0].title,
  )
  const windowSize = useWindowResize()

  const componentMap = {
    ReviewedProducts: (props: UserId) => <ReviewedProducts {...props} />,
    RegisteredProducts: (props: UserId) => <CreatedProducts {...props} />,
    WishListedProducts: (props: UserId) => <FavoriteProducts {...props} />,
  }

  const ActiveComponent =
    componentMap[
      PRODUCT_CATEGORIES.find((category) => category.title === activeCategory)
        ?.componentName || 'ReviewedProducts'
    ]

  return (
    <section className="flex flex-col gap-6 w-full pb-[60px]">
      {windowSize < 1280 ? (
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
      <ActiveComponent userId={userId} />
    </section>
  )
}
