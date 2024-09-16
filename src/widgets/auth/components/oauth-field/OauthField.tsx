import Image from 'next/image'
import { google, kakao } from '@shared/icons'
import { googleSignIn, kakaoSignIn } from '@app/provider/Oauth'

export default function OauthField() {
  return (
    <div className="flex flex-col gap-5 text-black-30">
      <span>SNS로 바로 시작하기</span>
      <div className="flex justify-center gap-5">
        <button
          onClick={googleSignIn}
          className="p-3.5 border border-black-30 rounded-full"
        >
          <Image src={google} alt="구글 로그인" width={24} height={24} />
        </button>
        <button
          onClick={kakaoSignIn}
          className="p-3.5 border border-black-30 rounded-full"
        >
          <Image src={kakao} alt="카카오 로그인" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
