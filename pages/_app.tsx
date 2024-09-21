import { useState } from 'react'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query'
import '@app/styles/globals.css'
import Gnb from '@/src/shared/ui/gnb/Gnb'
import { KakaoScript } from '@app/provider/KakaoScript'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '@app/styles/toastify-style.css'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError: true,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Gnb state={pageProps.dehydratedState} />
        <Component {...pageProps} />
        <KakaoScript />
        <ToastContainer
          autoClose={1000}
          position="bottom-center"
          theme="dark"
          pauseOnFocusLoss={false}
          hideProgressBar={true}
        />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
