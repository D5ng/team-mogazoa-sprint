import { hamburger } from '@shared/icons'
import Image from 'next/image'
import { useToggle } from '../../hooks'

interface hamburgerProps {
  toggleSideMenu: () => void
}
export default function GnbHamburgerButton({ toggleSideMenu }: hamburgerProps) {
  return (
    <div className="hidden mobile:translate-y-[50%] mobile:left-[10%] absolute mobile:block mobile:translate-x-[-120%]">
      <button className="sideMenu" onClick={() => toggleSideMenu()}>
        <Image
          src={hamburger}
          width={30}
          height={10}
          alt="햄버거버튼"
          priority
        />
      </button>
    </div>
  )
}
