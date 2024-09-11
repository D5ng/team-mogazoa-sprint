import { CATEGORY_CHIPS } from '@/src/widgets/product/category-chip/CategoryChip.constants'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'

interface CategoryDropdownProps {
  onChange: (...event: any[]) => void
}

export default function CategoryDropdown({ onChange }: CategoryDropdownProps) {
  return (
    <Dropdown className="w-[360px] mobile:w-full">
      <DropdownTrigger>카테고리 선택</DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((category) => (
          <DropdownMenuItem
            onClick={() => onChange(category.id)}
            key={category.id}
          >
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
