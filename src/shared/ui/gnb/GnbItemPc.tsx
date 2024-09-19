import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/images/logo.png'
import GnbInput from './GnbProductSearchInput'
import GnbMenu from './GnbMenu'
import useSearchProduct from '@shared/hooks/useSearchProduct'

export default function GnbPc() {
  const { resetProducts } = useSearchProduct()

  return (
    <div className="fixed top-0 w-full flex items-center bg-black-80 px-[120px] py-[25px] justify-between tablet:px-[40px] tablet:py-[20px] z-dropdown">
      <div onClick={resetProducts}>
        <Link href={'/'}>
          <Image src={logo} width={160} height={30} alt="메인로고" priority />
        </Link>
      </div>
      {/* 햄버거 메뉴 */}
      <div className="flex items-center gap-[30px]">
        {/* 검색 아이콘 */}
        <GnbInput />
        <div className="flex text-white text-[14px] item-center gap-[40px] tablet:gap-[25px]">
          <GnbMenu />
        </div>
      </div>
    </div>
  )
}
