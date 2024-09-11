import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownTrigger,
} from '@shared/ui/dropdown/Dropdown'
import { LATEST_DROPDOWN_ITEMS } from '@widgets/product-detail/constants'

export default function LatestDropdown() {
  return (
    <Dropdown variant="none">
      <DropdownTrigger className="tablet:text-sm">최신순</DropdownTrigger>
      <DropdownMenu>
        {LATEST_DROPDOWN_ITEMS.map((title) => (
          <DropdownMenuItem key={title}>{title}</DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
