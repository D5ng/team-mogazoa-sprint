import Image from 'next/image'
import { createContext, PropsWithChildren, useContext } from 'react'
import { useToggle, useSelect, useOutsideClick } from '@shared/hooks'
import type {
  Dropdown,
  DropdownContextType,
  DropdownMenuItemType,
} from './Dropdown.type'
import { DROPDOWN_VARIANT } from './Dropdown.constants'
import DropdownArrowIcon from '@app/images/icons/dropdown-arrow.svg'

export const DropdownContext = createContext<DropdownContextType>({
  isToggle: false,
  onToggle: () => {},
  onOpenToggle: () => {},
  onCloseToggle: () => {},
  selectedItem: '',
  onSelect: () => {},
  variant: 'border',
})

export const useDropdownContext = () => {
  const dropdownContext = useContext(DropdownContext)
  if (!dropdownContext) throw new Error('DropdownContext에서 사용해주세요.')
  return dropdownContext
}

export function Dropdown({ children, variant = 'border' }: Dropdown) {
  const selectStates = useSelect<string>({ defaultValue: '' })
  const toggleStates = useToggle()

  const ref = useOutsideClick<HTMLDivElement>({
    onCloseToggle: toggleStates.onCloseToggle,
  })

  return (
    <DropdownContext.Provider
      value={{
        variant,
        ...toggleStates,
        ...selectStates,
      }}
    >
      <div className={DROPDOWN_VARIANT[variant].wrapper} ref={ref}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

export function DropdownTrigger({ children }: PropsWithChildren) {
  const { isToggle, onToggle, selectedItem, variant } = useDropdownContext()
  const rotateClass = isToggle ? 'rotate-180' : 'rotate-0'
  return (
    <button onClick={onToggle} className={DROPDOWN_VARIANT[variant].button}>
      {selectedItem || children}

      <Image
        src={DropdownArrowIcon}
        alt={isToggle ? '드롭다운 목록 열기' : '드롭다운 목록 닫기'}
        width="24"
        height="24"
        className={rotateClass}
      />
    </button>
  )
}

export function DropdownMenu({ children }: PropsWithChildren) {
  const { isToggle } = useDropdownContext()
  return (
    isToggle && (
      <ul className="absolute top-[calc(100%+5px)] w-full p-[10px] flex flex-col gap-y-[5px] bg-black-60 border-black-70 rounded-lg text-black-30">
        {children}
      </ul>
    )
  )
}

export function DropdownMenuItem({ children }: DropdownMenuItemType) {
  const { onSelect, onCloseToggle } = useDropdownContext()
  const handleClick = () => {
    onSelect(children as string)
    onCloseToggle()
  }
  return (
    <li
      className="px-[20px] py-[6px] hover:bg-black-70 hover:text-black-10 rounded-[6px]"
      onClick={handleClick}
    >
      {children}
    </li>
  )
}
