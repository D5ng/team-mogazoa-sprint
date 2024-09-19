import { GetServerSideProps } from 'next'
import ProductPage from '@/src/pages/product/Product'
import { axiosInstance } from '@shared/config'
import { QueryClient } from '@tanstack/react-query'

export default function Home() {
  return <ProductPage />
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth

  if (cookie) {
    const token = JSON.parse(cookie).accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    axiosInstance.defaults.headers.common['Authorization'] = ``
  }

  try {
    const queryClient = new QueryClient()

    // await queryClient.prefetchQuery({
    //   queryKey: ['product', productId],
    //   queryFn: () => useFetchProductsHot({ productId: +productId }),
    // })

    // const data = queryClient.getQueryData(['product-detail', productId])

    // if (!data) return { notFound: true }
  } catch (error) {}

  return {
    props: {},
  }
}) satisfies GetServerSideProps
