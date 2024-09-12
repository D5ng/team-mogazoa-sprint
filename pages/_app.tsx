import { useState } from 'react'
import type { AppProps } from 'next/app'
import '@/src/app/styles/globals.css'
import Gnb from '@/src/widgets/product/gnb/Gnb'
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Gnb />
        <div className="mt-[100px] tablet:mt-[80px] mobile:mt-[70px]">
          <Component {...pageProps} />
        </div>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
