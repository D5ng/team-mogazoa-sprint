import { useReviewOptionStore } from '@/src/shared/store'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui/dropdown/Dropdown'
import {
  LATEST_DROPDOWN_ITEMS,
  ReviewSortOptions,
} from '@widgets/product-detail/constants'

export default function LatestDropdown() {
  const onSelectedOption = useReviewOptionStore(
    (state) => state.onSelectedOption,
  )
  return (
    <Dropdown variant="none">
      <DropdownTrigger className="tablet:text-sm">최신순</DropdownTrigger>
      <DropdownMenu>
        {LATEST_DROPDOWN_ITEMS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSelectedOption(option.value)}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
