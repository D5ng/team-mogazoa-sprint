import Image from 'next/image'
import { search } from '@shared/icons'
import { useRouter } from 'next/router'
import {
  AutocompleteDropdown,
  AutocompleteField,
  AutocompleteInput,
} from '@/src/shared/ui'
import { PRODUCT_MOCK } from '@/src/widgets/product/gnb/Gnb.mock'
import { twMerge } from 'tailwind-merge'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import useProduct from '@/src/shared/hooks/useProduct'

export default function GnbInput() {
  // 상품 검색 로직은 어떻게 작동되는지 파악이 안돼서 후에 작성 하겠습니다.
  const router = useRouter()
  const { ref: inputRef, filteredProducts } = useProduct()
  const { register, setValue } = useForm()

  const INPUT_STYLE = twMerge(
    'text-[14px] text-white w-[400px] h-[50px] rounded-[30px] px-[40px] py-[5px] bg-black-70 tablet:w-[300px] tablet:h-[40px] target:text-[12px]',
  )

  useEffect(() => {
    // console.log(inputRef.current?.value)
  }, [inputRef?.current?.value])
  if (router.pathname === '/sign-in' || router.pathname === '/sign-up') return

  return (
    <div className="relative">
      <AutocompleteField
        suggestionList={PRODUCT_MOCK}
        {...register('autocompleteInput')}
        setValue={setValue}
      >
        <AutocompleteInput
          className={INPUT_STYLE}
          placeholder="상품 이름을 검색해 보세요"
          ref={inputRef}
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
