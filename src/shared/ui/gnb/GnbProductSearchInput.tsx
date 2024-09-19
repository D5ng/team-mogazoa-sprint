import Image from 'next/image'
import { search } from '@shared/icons'
import { useRouter } from 'next/router'
import {
  AutocompleteDropdown,
  AutocompleteField,
  AutocompleteInput,
} from '@shared/ui'
import { twMerge } from 'tailwind-merge'
import { useForm } from 'react-hook-form'

export default function GnbProductSearchInput() {
  const router = useRouter()
  const { register, setValue } = useForm()

  const INPUT_STYLE = twMerge(
    'text-[14px] text-white w-[400px] h-[50px] rounded-[30px] px-[40px] py-[5px] bg-black-70 tablet:w-[300px] tablet:h-[40px] target:text-[12px]',
  )

  if (router.pathname === '/sign-in' || router.pathname === '/sign-up') return

  return (
    <div className="relative">
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
        className="absolute left-[13px] top-[16Px] tablet:top-[11px]"
        src={search}
        width={20}
        height={20}
        alt="돋보기 아이콘"
      />
    </div>
  )
}
