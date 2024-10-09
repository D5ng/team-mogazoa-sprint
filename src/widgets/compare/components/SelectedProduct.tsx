import { ReactNode } from 'react'
import { close } from '@shared/icons'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function SelectedProduct({
  id,
  deleteSelectedProduct,
  setViewCompareSheet,
  children,
}: {
  id: string
  deleteSelectedProduct: () => void
  setViewCompareSheet: (arg: boolean) => void
  children: ReactNode
}) {
  const TAG_STYLE = id === '상품1' ? 'text-green bg-green' : 'text-pink bg-pink'
  const mobile = twMerge('mobile:h-[60px]')
  const handleClickTag = () => {
    setViewCompareSheet(false)
    deleteSelectedProduct()
  }
  return (
    <div className={`input-base ${mobile} p-[13px] w-full`}>
      <div
        onClick={handleClickTag}
        className={`flex  w-full justify-between rounded-lg  tablet:w-4/5 bg-opacity-20 ${TAG_STYLE} text-[12px] p-[8px] cursor-pointer`}
      >
        {children}
        <Image src={close} width={10} height={8} alt="클로즈" />
      </div>
    </div>
  )
}
