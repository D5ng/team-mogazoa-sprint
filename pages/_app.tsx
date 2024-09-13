import { useState } from 'react'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query'
import '@app/styles/globals.css'
import Gnb from '@/src/widgets/product/gnb/Gnb'
import { KakaoScript } from '@app/provider/KakaoScript'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Gnb />
        <div className="">
          <Component {...pageProps} />
        </div>
        <KakaoScript />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
