import { useProductStore } from '@shared/store/productStore'
import useSearchProduct from '@shared/hooks/useSearchProduct'
import { CATEGORY_CHIPS } from '@shared/ui'
import { useRouter } from 'next/router'
import CategoryItems from './CategoryItems'

interface CategoryMenuProps {
  menuVisible?: boolean
}

const CategoryMenu = ({ menuVisible }: CategoryMenuProps) => {
  const { selectedCategoryKey } = useProductStore()
  const { handleCategory } = useSearchProduct()
  const router = useRouter()
  if (router.pathname !== '/' && router.pathname !== `/category/[id]`) return
  return (
    <article
      className={`fixed top-105 mt-[20px] mobile:mt-[50px]  shrink-0 left-[9vw]  tablet:left-[40px] ${menuVisible ? '' : 'mobile:hidden'} mobile:w-2/5 mobile:left-0 mobile:bg-black-50 mobile:z-dropdown`}
    >
      <p className="text-[16px] tablet:text-[14px] mobile:mt-[20px] ml-[20px] text-white mb-[10px]">
        카테고리
      </p>
      <ul className="flex flex-col gap-[8px] mobile:mt-[20px] w-[200px] mobile:w-[180px]">
        {CATEGORY_CHIPS.map((data) => (
          <CategoryItems
            key={data.id}
            query={data.id}
            checked={selectedCategoryKey === data.id}
            handleClick={() => handleCategory(data.id, data.name)}
          >
            {data.name}
          </CategoryItems>
        ))}
      </ul>
    </article>
  )
}

export default CategoryMenu
