import { CATEGORY_CHIPS } from '@/src/widgets/product/components/category-chip/CategoryChip.constants'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'
import { Control, useController } from 'react-hook-form'
import type { ProductPayload } from '@shared/types'
import { categoryValidation } from '@/src/shared/utils'

interface CategoryDropdownProps {
  error: string | undefined
  control: Control<ProductPayload>
}

export default function CategoryDropdown({
  control,
  error,
}: CategoryDropdownProps) {
  const {
    field: { onChange, onBlur },
  } = useController({
    name: 'categoryId',
    control: control,
    rules: categoryValidation,
    defaultValue: null,
  })

  return (
    <Dropdown className={`w-[360px] mobile:w-full`}>
      <DropdownTrigger
        className={error ? 'border-red' : 'border-black-70'}
        onBlur={onBlur}
      >
        카테고리 선택
      </DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((category) => (
          <DropdownMenuItem
            onClick={onChange.bind(null, category.id)}
            key={category.id}
          >
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
