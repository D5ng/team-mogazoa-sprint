import { ChangeEventHandler, forwardRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'
import { search } from '@shared/icons'
import { useOutsideClick, useToggle } from '../../hooks'
import useProductAutocomplete from '@/src/widgets/compare/hooks/useProductAutocomplete'
import { usePathname, useSearchParams } from 'next/navigation'

interface GnbProductSearchInputProps {
  searchVisible: boolean
}

const GnbProductSearchInput = forwardRef<
  HTMLDivElement,
  GnbProductSearchInputProps
>(({ searchVisible }, ref) => {
  const router = useRouter()
  const INPUT_STYLE = twMerge(
    'text-[14px] text-white w-[400px] h-[50px] rounded-[30px] px-[40px] py-[5px] bg-black-70 tablet:w-[300px] tablet:h-[40px] target:text-[12px]',
  )
  const { isToggle, onCloseToggle, onOpenToggle } = useToggle()
  const { inputValue, handleInputChange, suggestions, handleClickList } =
    useProductAutocomplete('suggestions', onCloseToggle)

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams?.toString())

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    handleInputChange(event.target.value)

    if (event.target.value) {
      params.set('query', event.target.value)
    } else {
      params.delete('query')
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  const clickRef = useOutsideClick<HTMLUListElement>({ onCloseToggle })
  if (router.pathname === '/sign-in' || router.pathname === '/sign-up')
    return null

  return (
    <div
      ref={ref}
      className={`relative ${searchVisible ? '' : 'mobile:hidden'} mobile:absolute mobile:left-1/2 mobile:top-1/2 mobile:translate-x-[-50%] mobile:translate-y-[120%]`}
    >
      <input
        onClick={onOpenToggle}
        className={INPUT_STYLE}
        placeholder="상품 이름을 검색해 보세요"
        onChange={handleChange}
        value={inputValue}
      />
      {isToggle && inputValue.length >= 2 && suggestions.length > 0 && (
        <ul
          ref={clickRef}
          className="absolute z-modal bg-black-70 border border-black-40 mt-1 w-full rounded-lg"
        >
          {suggestions.map((name: string, index: number) => (
            <li
              key={index}
              className="p-2  cursor-pointer  text-black-30 hover:bg-gray-70 hover:text-white"
              onClick={() => handleClickList(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
      <Image
        className="absolute left-[13px] top-[16px] tablet:top-[11px]"
        src={search}
        width={20}
        height={20}
        alt="돋보기 아이콘"
      />
    </div>
  )
})

GnbProductSearchInput.displayName = 'GnbProductSearchInput'

export default GnbProductSearchInput
