import MenuTaps from './MenuTaps'

import { useProductStore } from '@shared/store/productStore'
import useSearchProduct from '@shared/hooks/useSearchProduct'
import { CATEGORY_CHIPS } from '@shared/ui'

export default function SideMenu() {
  const { selectedCategoryKey } = useProductStore()
  const { handleCategory } = useSearchProduct()

  return (
    <article className=" fixed top-100  tablet:w-full shrink-0 left-[9.5vw] tablet:left-[4vw]">
      <p className="text-[16px] tablet:text-[14px] ml-[20px] text-white mb-[10px]">
        카테고리
      </p>
      <ul className="flex flex-col gap-[8px] ">
        {CATEGORY_CHIPS.map((data) => (
          <li key={data.id}>
            <MenuTaps
              checked={selectedCategoryKey === data.id}
              handleClick={() => handleCategory(data.id, data.name)}
            >
              {data.name}
            </MenuTaps>
          </li>
        ))}
      </ul>
    </article>
  )
}
