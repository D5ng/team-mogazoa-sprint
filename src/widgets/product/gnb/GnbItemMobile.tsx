import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/images/logo-mobile.png'
import GnbInput from './GnbProductSearchInput'
import { hamburger, search } from '@shared/icons'
import { useOutsideClick, useToggle } from '@shared/hooks'
import SideMenuMobile from '../side-menu/SideMenuMobile'
import useSearchProduct from '@/src/shared/hooks/useSearchProduct'

export default function GnbMenu() {
  const { isToggle: searchVisible, onToggle: toggleSearchInput } = useToggle()
  const { isToggle: sideMenuVisible, onToggle: toggleSideMenu } = useToggle()
  const { resetProducts } = useSearchProduct()
  const inputRef = useOutsideClick<HTMLDivElement>({
    onCloseToggle: () => toggleSearchInput(),
    callback: (element) => {
      return element.closest('.search')
    },
  })
  const closeRef = useOutsideClick<HTMLDivElement>({
    onCloseToggle: () => toggleSideMenu(),
    callback: (element) => {
      return element.closest('.sideMenu')
    },
  })
  return (
    <>
      <div className="fixed top-0 w-full flex items-center justify-between bg-black-80 px-[30px] py-[20px]">
        <button className="sideMenu" onClick={() => toggleSideMenu()}>
          <Image
            src={hamburger}
            width={30}
            height={10}
            alt="햄버거버튼"
            priority
          />
        </button>
        <div onClick={resetProducts}>
          <Link href={'/'}>
            <Image src={logo} width={110} height={80} alt="메인로고" />
          </Link>
        </div>

        <button onClick={() => toggleSearchInput()} className="search">
          <Image src={search} width={30} height={10} alt="돋보기버튼" />
        </button>

        {searchVisible && (
          <div
            ref={inputRef}
            className="absolute top-[70px] left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out"
          >
            <GnbInput />
          </div>
        )}
      </div>
      {sideMenuVisible && (
        <div ref={closeRef}>
          <SideMenuMobile />
        </div>
      )}
    </>
  )
}
