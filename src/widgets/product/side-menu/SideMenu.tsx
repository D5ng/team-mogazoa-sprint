import MenuTaps from './MenuTaps'
import { CATEGORY_CHIPS } from '../category-chip/CategoryChip.constants'
import useProduct from '@/src/shared/hooks/useProduct'

export default function SideMenu() {
  const { handleSelect } = useProduct()

  return (
    <article>
      <p className="text-[16px] tablet:text-[14px] ml-[20px] text-white mb-[10px]">
        카테고리
      </p>
      <ul className="flex flex-col gap-[8px] ">
        {CATEGORY_CHIPS.map((data) => (
          <li key={data.id}>
            <MenuTaps onChange={() => handleSelect(data.id)}>
              {data.name}
            </MenuTaps>
          </li>
        ))}
      </ul>
    </article>
  )
}
