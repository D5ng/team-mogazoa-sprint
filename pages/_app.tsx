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
import { DefaultSeo } from 'next-seo'

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
    <>
      <DefaultSeo
        title="모가조아 - 모든 상품을 확인하고 리뷰를 달아보세요."
        description="음악, 식당, 영화, 강의, 여행지, 전자기기, 호텔, 와인, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼"
        canonical={process.env.NEXT_PUBLIC_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: '모가조아 - 모든 상품을 확인하고 리뷰를 달아보세요.',
          description:
            '음악, 식당, 영화, 강의, 여행지, 전자기기, 호텔, 와인, 옷, 앱 등 다양한 분야의 상품을 리뷰하는 플랫폼',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/images/seo-image.jpg`,
              width: 1200,
              height: 630,
              alt: 'Og Image Alt',
              type: 'image/jpg',
            },
          ],
          siteName: '모가조아',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Gnb cookie={pageProps.cookie} />
          <Component {...pageProps} />
          <KakaoScript />
          {/* <ToastContainer
            autoClose={1000}
            position="bottom-center"
            theme="dark"
            pauseOnFocusLoss={false}
            hideProgressBar={true}
          /> */}
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}
