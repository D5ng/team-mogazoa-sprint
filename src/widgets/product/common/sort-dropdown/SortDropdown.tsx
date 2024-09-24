import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui/dropdown/Dropdown'
import {
  LATEST_DROPDOWN_ITEMS,
  ReviewSortOptions,
} from '@widgets/product/product-detail/constants'

interface SortDropdownProps {
  onChange: (value: ReviewSortOptions) => void
}

export default function SortDropdown({ onChange }: SortDropdownProps) {
  return (
    <Dropdown variant="none">
      <DropdownTrigger className="tablet:text-sm">최신순</DropdownTrigger>
      <DropdownMenu>
        {LATEST_DROPDOWN_ITEMS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={onChange.bind(null, option.value)}
          >
            {option.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
