import Image from 'next/image'
import Link from 'next/link'
import GnbInput from './GnbProductSearchInput'
import GnbMenu from './GnbMenu'
import useSearchProduct from '@shared/hooks/useSearchProduct'
import { useOutsideClick, useToggle } from '../../hooks'
import GnbHamburger from './GnbHamburgerButton'
import GnbSearchButton from './GnbSearchButton'
import GnbMobileSideBar from './GnbMobileSideBar'
import { logo } from '@shared/icons'
import CategoryDropDown from '@/src/widgets/product/product-home/components/category-menu/CategoryDropDown'
import { useRouter } from 'next/router'

export default function Gnb({ cookie }: any) {
  const { resetProducts } = useSearchProduct()
  const router = useRouter()
  const {
    isToggle: searchVisible,
    onToggle: toggleSearchInput,
    onCloseToggle: closeSearchInput,
  } = useToggle()
  const {
    isToggle: sideMenuVisible,
    onToggle: toggleSideMenu,
    onCloseToggle: closeCategoryMenu,
  } = useToggle()
  const inputRef = useOutsideClick<HTMLDivElement>({
    onCloseToggle: () => closeSearchInput(),
    callback: (element) => {
      return element.closest('.search')
    },
  })
  const closeRef = useOutsideClick<HTMLDivElement>({
    onCloseToggle: () => closeCategoryMenu(),
    callback: (element) => {
      return element.closest('.sideMenu')
    },
  })

  return (
    <div className="fixed mobile:h-[70px] top-0 w-full  bg-black-80 px-[120px] py-[25px]  tablet:px-[40px] tablet:py-[20px] z-dropdown">
      <div className="w-full  flex items-center justify-between mobile:relative">
        <div
          className="mobile:absolute mobile:left-[50%] mobile:translate-x-[-50%] mobile:translate-y-[50%]"
          onClick={resetProducts}
        >
          <Link href={'/'}>
            <Image src={logo} width={160} alt="메인로고" priority />
          </Link>
        </div>
        <GnbHamburger toggleSideMenu={toggleSideMenu} />
        <div className="flex items-center gap-[30px]">
          <GnbSearchButton toggleSearchInput={toggleSearchInput} />

          <GnbInput ref={inputRef} searchVisible={searchVisible} />
          <div className="flex text-white text-[14px] item-center gap-[40px] tablet:gap-[25px] mobile:hidden">
            <GnbMenu cookie={cookie} />
          </div>
        </div>
      </div>
      <GnbMobileSideBar
        ref={closeRef}
        menuVisible={sideMenuVisible}
        closeCategoryMenu={closeCategoryMenu}
        cookie={cookie}
      />
    </div>
  )
}
