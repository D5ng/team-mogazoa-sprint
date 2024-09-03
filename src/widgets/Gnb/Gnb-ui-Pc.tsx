import Image from 'next/image'
import Link from 'next/link'
import logo from '@/src/app/assets/images/logo.png'
import GnbInput from './Gnb-Input'
import GnbMenu from './Gnb-Menu'

export default function GnbPc() {
  return (
    <div className="flex items-center bg-black-20 px-120 py-40 justify-between tablet:px-40 tablet:py-20">
      <Link href={'/'}>
        <Image src={logo} width={160} height={30} alt="메인로고" />
      </Link>
      <div className="flex items-center gap-30">
        <GnbInput />
        <div className="flex text-white text-14 item-center gap-40 tablet:gap-25">
          <GnbMenu />
        </div>
      </div>
    </div>
  )
}
