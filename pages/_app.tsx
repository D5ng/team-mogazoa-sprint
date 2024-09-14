import '@app/styles/globals.css'
import Gnb from '@widgets/product/gnb/Gnb'
import { KakaoScript } from '@app/provider/KakaoScript'

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  //위 로직은 로컬에서 하이드레이션 버그를 예방하기 위해서 넣었습니다! 빌드시 제거해야합니다.
  return (
    mounted && (
      <>
        <Gnb />
        <div className="">
          <Component {...pageProps} />
        </div>
        <KakaoScript />
      </>
    )
  )
}
