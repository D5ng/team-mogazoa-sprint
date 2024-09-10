import Image from 'next/image'
import Link from 'next/link'
import logo from '@/src/app/assets/images/logo.png'
import GnbInput from './Gnb-Input'
import GnbMenu from './Gnb-Menu'

export default function GnbPc() {
  return (
    <div className="flex items-center bg-black-80 px-[120px] py-[20px] justify-between tablet:px-[40px] tablet:py-[20px]">
      <Link href={'/'}>
        <Image src={logo} width={160} height={30} alt="메인로고" />
      </Link>
      <div className="flex items-center gap-[30px]">
        <GnbInput />
        <div className="flex text-white text-[14px] item-center gap-[40px] tablet:gap-[25px]">
          <GnbMenu />
        </div>
      </div>
    </div>
  )
}
