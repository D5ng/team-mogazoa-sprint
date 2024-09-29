import useSearchProduct from '@/src/shared/hooks/useSearchProduct'
import { useProductStore } from '@/src/shared/store/productStore'
import { CATEGORY_CHIPS, CategoryChip } from '@/src/shared/ui'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui/dropdown/Dropdown'

export default function CategoryDropDown() {
  const { selectedCategoryName } = useProductStore()
  const { handleCategory } = useSearchProduct()
  return (
    <Dropdown className="hidden mobile:block" variant="none">
      <DropdownTrigger className="tablet:text-sm">
        {selectedCategoryName ? selectedCategoryName : '카테고리 없음'}
      </DropdownTrigger>
      <DropdownMenu>
        {CATEGORY_CHIPS.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onClick={() => handleCategory(option.id, option.name)}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
