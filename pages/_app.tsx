import '@/src/app/styles/globals.css'
import Gnb from '@/src/widgets/product/gnb/Gnb'

import type { AppProps } from 'next/app'
import { Suspense, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState<boolean>(false)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  //위 로직은 로컬에서 하이드레이션 버그를 예방하기 위해서 넣었습니다! 빌드시 제거해야합니다.
  return (
    mounted && (
      <>
        <QueryClientProvider client={queryClient}>
          <Gnb />
          <Suspense fallback={<div>로딩중</div>}>
            <Component {...pageProps} />
          </Suspense>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </>
    )
  )
}
