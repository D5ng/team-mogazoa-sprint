import { GetServerSideProps } from 'next'
import ProductPage from '@/src/pages/product/Product'
import { axiosInstance } from '@shared/config'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchProducts } from '@/src/shared/api'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="모가조아 - 모든 상품을 확인하고 리뷰를 달아보세요." />
      <ProductPage />
    </>
  )
}

// export const getServerSideProps = (async (context) => {
//   const cookie = context.req.cookies.auth

//   if (cookie) {
//     const token = JSON.parse(cookie).accessToken
//     axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
//   } else {
//     axiosInstance.defaults.headers.common['Authorization'] = ``
//   }

//   try {
//     const queryClient = new QueryClient()

//     await queryClient.prefetchQuery({
//       queryKey: ['product', 'reviewCount'],
//       queryFn: () => fetchProducts({ order: 'reviewCount' }),
//     })

//     await queryClient.prefetchQuery({
//       queryKey: ['product', 'ratedCount'],
//       queryFn: () => fetchProducts({ order: 'rating' }),
//     })

//     const hotData = queryClient.getQueryData(['product', 'reviewCount'])
//     const ratedData = queryClient.getQueryData(['product', 'ratedCount'])

//     if (!hotData && !ratedData) return { notFound: true }
//     return {
//       props: {
//         dehydratedState: dehydrate(queryClient),
//         cookie: cookie ? cookie : null,
//       },
//     }
//   } catch (error) {
//     return { notFound: true }
//   }
// }) satisfies GetServerSideProps
