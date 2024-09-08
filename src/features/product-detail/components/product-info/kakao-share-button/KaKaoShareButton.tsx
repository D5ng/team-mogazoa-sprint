import Image from 'next/image'
import { kakao } from '@app/icons'

export default function KaKaoShareButton() {
  return (
    <button className="flex justify-center items-center w-[28px] h-[28px] rounded-md bg-black-60">
      <Image src={kakao} alt="카카오로 공유하기" width={18} height={18} />
    </button>
  )
}
