import { useState } from 'react'
import {
  ReviewedProducts,
  RegisteredProducts,
  WishListedProducts,
} from '@widgets/profile/components'
import { PRODUCT_CATEGORIES } from '@widgets/profile/constants/ProductCategories.constant'

export default function ProductCardSection() {
  const [activeCategory, setActiveCategory] = useState('리뷰 남긴 상품')

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
      <div className="flex gap-4">
        {PRODUCT_CATEGORIES.map(({ title }) => (
          <button
            key={title}
            onClick={() => setActiveCategory(title)}
            className={`text-xl tablet:text-lg ${
              activeCategory === title ? 'text-white' : 'text-black-30'
            }`}
          >
            {title}
          </button>
        ))}
      </div>
      <ActiveComponent />
    </section>
  )
}
