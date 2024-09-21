import { forwardRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { search } from '@shared/icons'
import {
  AutocompleteDropdown,
  AutocompleteField,
  AutocompleteInput,
} from '../autocomplete-field/AutocompleteField'

interface GnbProductSearchInputProps {
  searchVisible: boolean
}

const GnbProductSearchInput = forwardRef<
  HTMLDivElement,
  GnbProductSearchInputProps
>(({ searchVisible }, ref) => {
  const router = useRouter()
  const { register, setValue } = useForm()
  const INPUT_STYLE = twMerge(
    'text-[14px] text-white w-[400px] h-[50px] rounded-[30px] px-[40px] py-[5px] bg-black-70 tablet:w-[300px] tablet:h-[40px] target:text-[12px]',
  )

  if (router.pathname === '/sign-in' || router.pathname === '/sign-up')
    return null

  return (
    <div
      ref={ref}
      className={`relative ${searchVisible ? '' : 'mobile:hidden'} mobile:absolute mobile:left-1/2 mobile:top-1/2 mobile:translate-x-[-50%] mobile:translate-y-[120%]`}
    >
      <AutocompleteField
        suggestionList={[]}
        {...register('autocompleteInput')}
        setValue={setValue}
      >
        <AutocompleteInput
          className={INPUT_STYLE}
          placeholder="상품 이름을 검색해 보세요"
        />
        <AutocompleteDropdown />
      </AutocompleteField>
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
