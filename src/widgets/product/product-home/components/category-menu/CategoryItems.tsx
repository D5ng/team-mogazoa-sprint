import Link from 'next/link'
import { MouseEvent, PropsWithChildren } from 'react'

export default function CategoryItems({
  children,
  handleClick,
  checked,
  query,
  ...props
}: PropsWithChildren<{
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void
  checked: boolean
  query: number
}>) {
  return (
    <li className="w-full">
      <Link href={`/product/category/${query}`}>
        <button
          className={`flex w-[200px] tablet:w-[180px] h-[50px] tablet:h-[45px] items-center cursor-pointer px-[20px] py-[15px] text-[16px] tablet:text-[14px] text-black-20 hover:text-white hover:border hover:border-black-30 hover:bg-black-20 rounded-md hover:bg-opacity-10 ${
            checked
              ? 'text-white border-black-30 bg-black-20 bg-opacity-10'
              : ''
          }`}
          onClick={handleClick}
          {...props}
        >
          {children}
        </button>
      </Link>
    </li>
  )
}
