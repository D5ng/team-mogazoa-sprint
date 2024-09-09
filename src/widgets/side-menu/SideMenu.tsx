import MenuTaps from './MenuTaps'
import { CATEGORY_CHIPS } from '../category-chip/CategoryChip.constants'

export default function SideMenu() {
  return (
    <ul className="flex flex-col gap-[8px]">
      <li className="text-[16px] tablet:text-[14px] ml-[20px] text-white">
        카테고리
      </li>
      {CATEGORY_CHIPS.map((category, index) => (
        <MenuTaps key={index}>{category}</MenuTaps>
      ))}
    </ul>
  )
}
