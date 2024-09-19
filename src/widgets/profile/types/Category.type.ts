import { PRODUCT_CATEGORIES } from '@widgets/profile/constants/ProductCategories.constant'

export type CategoryTitle = (typeof PRODUCT_CATEGORIES)[number]['title']

export type CategorySelectorProps = {
  activeCategory: CategoryTitle
  setActiveCategory: React.Dispatch<React.SetStateAction<CategoryTitle>>
}
