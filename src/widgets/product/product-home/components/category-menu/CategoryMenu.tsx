import { useProductStore } from '@shared/store/productStore'
import { useCategoryQuery } from '@shared/hooks'
import { Categories, CATEGORY_CHIPS } from '@shared/ui'
import CategoryItem from './CategoryItem'
import { useState } from 'react'

interface CategoryMenuProps {
  menuVisible?: boolean
}

const CategoryMenu = ({ menuVisible }: CategoryMenuProps) => {
  const { category: defaultValue } = useCategoryQuery()

  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    defaultValue || null,
  )
  const handleSelectedCategory = (category: Categories) =>
    setSelectedCategory(category)

  return (
    <article
      className={`fixed max-h-[calc(100vh-100px)] overflow-y-auto top-105 mt-[20px] mobile:mt-[50px]  shrink-0 left-[9vw]  tablet:left-[20px] ${menuVisible ? '' : 'mobile:hidden'} mobile:w-2/5 mobile:left-0 mobile:bg-black-50 mobile:z-dropdown none-scrollbar`}
    >
      <p className="text-[16px] tablet:text-[14px] mobile:mt-[20px] ml-[20px] text-white mb-[10px]">
        카테고리
      </p>
      <ul className="flex flex-col gap-[8px] mobile:mt-[20px] w-[200px] mobile:w-[180px]">
        {CATEGORY_CHIPS.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            selectedCategory={selectedCategory === category}
            onSelectedCategory={handleSelectedCategory}
          >
            {category.name}
          </CategoryItem>
        ))}
      </ul>
    </article>
  )
}

export default CategoryMenu
