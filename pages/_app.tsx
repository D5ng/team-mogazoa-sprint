import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/src/app/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.css"
          rel="stylesheet"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
