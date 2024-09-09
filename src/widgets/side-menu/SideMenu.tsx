import MenuTaps from './MenuTaps'
import { CATEGORY_CHIPS } from '../category-chip/CategoryChip.constants'

export default function SideMenu() {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="text-[16px] tablet:text-[14px] ml-[20px] text-white">
        카테고리
      </p>
      {CATEGORY_CHIPS.map((category, index) => (
        <MenuTaps key={index}>{category}</MenuTaps>
      ))}
    </div>
  )
}
