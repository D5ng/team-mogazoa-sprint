// import MenuTaps from './MenuTaps'
// import { CATEGORY_CHIPS } from '../category-chip/CategoryChip.constants'

export default function SideMenu() {
  return (
    <article>
      <p className="text-[16px] tablet:text-[14px] ml-[20px] text-white mb-[10px]">
        카테고리
      </p>
      <ul className="flex flex-col gap-[8px] ">
        {/* {CATEGORY_CHIPS.map((data) => (
          <li>
            <MenuTaps key={data.id}>{data.name}</MenuTaps>
          </li>
        ))} */}
      </ul>
    </article>
  )
}
