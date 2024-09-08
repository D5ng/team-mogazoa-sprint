import Image from 'next/image'
import { createContext, PropsWithChildren, useContext } from 'react'
import { useToggle, useSelect, useOutsideClick } from '@shared/hooks'
import type {
  DropdownProps,
  DropdownContextType,
  DropdownMenuItemProps,
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

export function Dropdown({ children, variant = 'border' }: DropdownProps) {
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
  const hasError = !children || (children as []).length === 0
  if (hasError) return null
  return (
    isToggle && (
      <ul className="absolute top-[calc(100%+5px)] w-full p-[10px] flex flex-col gap-y-[5px] bg-black-60 border border-black-70 rounded-lg text-black-30 z-[100] max-h-[300px] overflow-y-scroll">
        {children}
      </ul>
    )
  )
}

export function DropdownMenuItem({ children }: DropdownMenuItemProps) {
  const { onSelect, onCloseToggle } = useDropdownContext()
  const handleClick = () => {
    onSelect(children as string)
    onCloseToggle()
  }
  return (
    <li
      className="px-[20px] py-[6px] hover:bg-black-70 hover:text-black-10 rounded-[6px] overflow-hidden text-ellipsis whitespace-nowrap tablet:text-sm tablet:px-[10px] shrink-0"
      onClick={handleClick}
    >
      {children}
    </li>
  )
}
