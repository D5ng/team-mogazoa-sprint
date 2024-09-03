import Image from 'next/image'
import Link from 'next/link'
import logo from '@/src/app/assets/images/logo-mobile.png'
import GnbInput from './Gnb-Input'
import hamburger from '@/src/app/assets/images/hamburgerIcon.png'
import searchIcon from '@/src/app/assets/images/searchIcon.png'
import { useEffect, useRef, useState } from 'react'

export default function GnbMenu() {
  const [hidden, setHidden] = useState(true)
  const inputRef = useRef<HTMLDivElement>(null)

  const showSearchInput = () => {
    if (hidden) {
      setHidden(false)
    }
    // else{submit}
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setHidden(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside)
    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
  }, [])
  return (
    <div className="flex items-center justify-between bg-black-80 px-[30px] py-[20px] relative">
      <button>
        <Image src={hamburger} width={30} height={10} alt="햄버거버튼" />
      </button>
      <Link href={'/'}>
        <Image src={logo} width={110} height={80} alt="메인로고" />
      </Link>
      <button onClick={showSearchInput}>
        <Image src={searchIcon} width={30} height={10} alt="돋보기버튼" />
      </button>
      {hidden ? (
        ''
      ) : (
        <div
          ref={inputRef}
          className="absolute top-[80px] left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out opacity-80"
        >
          <GnbInput />
        </div>
      )}
    </div>
  )
}
