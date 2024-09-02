import Image from 'next/image'
import logo from '@/src/app/assets/images/logo.png'
import logoMobile from '@/src/app/assets/images/logo-mobile.png'
import Link from 'next/link'
import GnbInput from './Gnb-Input'
import GnbMenu from './Gnb-Menu'
export default function Gnb() {
  return (
    <div className="flex items-center bg-black-20 px-120 py-40 justify-between">
      <Link href={'/'}>
        <Image src={logo} width={160} height={30} alt="메인로고" />
      </Link>
      <div className="flex items-center gap-30">
        <GnbInput />
        <div className="flex text-white text-14 item-center gap-30">
          <GnbMenu />
        </div>
      </div>
    </div>
  )
}
