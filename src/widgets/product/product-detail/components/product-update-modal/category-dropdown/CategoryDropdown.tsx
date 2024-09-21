import { CATEGORY_CHIPS } from '@/src/shared/ui/category-chip/CategoryChip.constants'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui'
import { Control, useController } from 'react-hook-form'
import type { ProductPayload } from '@shared/types'
import { categoryValidation } from '@shared/utils'

interface CategoryDropdownProps {
  error: string | undefined
  control: Control<ProductPayload>
}

export default function CategoryDropdown({
  control,
  error,
}: CategoryDropdownProps) {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: 'categoryId',
    control: control,
    rules: categoryValidation,
  })

  const category = CATEGORY_CHIPS.find((category) => category.id === value)
  if (!category) throw new Error('카테고리 아이디가 잘못되었어요.')

  return (
    <Dropdown className={`w-[360px] mobile:w-full`}>
      <DropdownTrigger
        className={error ? 'border-red' : 'border-black-70'}
        onBlur={onBlur}
      >
        {category.name}
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
