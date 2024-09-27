import Image from 'next/image'
import { kakao } from '@shared/icons'

export default function KaKaoShareButton() {
  return (
    <button className="flex justify-center items-center w-[28px] h-[28px] rounded-md bg-black-60 tablet:w-[24px] tablet:h-[24px]">
      <Image
        src={kakao}
        alt="카카오로 공유하기"
        width={18}
        height={18}
        className="mobile:w-[14px] mobile:h-[14px]"
      />
    </button>
  )
}
