import Image from 'next/image'
import Link from 'next/link'
import logo from '@/src/app/assets/images/logo-mobile.png'
import GnbInput from './Gnb-Input'
import hamburger from '@/src/app/assets/images/hamburgerIcon.png'
import searchIcon from '@/src/app/assets/images/searchIcon.png'
import { useOutsideClick, useToggle } from '@/src/shared/hooks'

export default function GnbMenu() {
  const { isToggle: isSearchVisible, onToggle: toggleSearchInput } = useToggle()
  const inputRef = useOutsideClick<HTMLButtonElement>({
    onCloseToggle: () => toggleSearchInput(),
  })
  return (
    <div className="flex items-center justify-between bg-black-80 px-[30px] py-[20px] relative">
      <button>
        <Image src={hamburger} width={30} height={10} alt="햄버거버튼" />
      </button>
      <Link href={'/'}>
        <Image src={logo} width={110} height={80} alt="메인로고" />
      </Link>
      <button ref={inputRef} onClick={() => toggleSearchInput()}>
        <Image src={searchIcon} width={30} height={10} alt="돋보기버튼" />
      </button>
      {isSearchVisible && (
        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out opacity-80">
          <GnbInput />
        </div>
      )}
    </div>
  )
}
