import { SendProductType } from '@/src/shared/types'
import { CATEGORY_CHIPS } from '@/src/widgets/product/category-chip/CategoryChip.constants'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'
import { Control, useController } from 'react-hook-form'

interface CategoryDropdownProps {
  control: Control<SendProductType>
}

export default function CategoryDropdown({ control }: CategoryDropdownProps) {
  const {
    field: { onChange },
  } = useController({ name: 'categoryId', control: control })
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
