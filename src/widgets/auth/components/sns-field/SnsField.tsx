import Image from 'next/image'
import { google, kakao } from '@shared/icons'

export default function SnsField() {
  return (
    <div className="flex flex-col gap-5 text-black-30">
      SNS로 바로 시작하기
      <div className="flex justify-center gap-5 ">
        <button className="p-3.5 border border-black-30 rounded-full">
          <Image src={google} alt="구글 로그인" />
        </button>
        <button className="p-3.5 border border-black-30 rounded-full">
          <Image src={kakao} alt="카카오 로그인" />
        </button>
      </div>
    </div>
  )
}
