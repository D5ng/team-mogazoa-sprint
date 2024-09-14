import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchProductDetail } from '@shared/api'
import { ProductDetail } from '@/src/pages'
import { axiosInstance } from '@/src/shared/config'

export default function ProductDetailPage({
  productId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ProductDetail productId={productId} />
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth

  if (cookie) {
    const token = JSON.parse(cookie).accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    axiosInstance.defaults.headers.common['Authorization'] = ``
  }

  const productId = +context.params?.id!
  if (!productId) return { notFound: true }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['product-detail', productId],
      queryFn: () => fetchProductDetail({ productId: +productId }),
    })

    const data = queryClient.getQueryData(['product-detail', productId])

    if (!data) return { notFound: true }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        productId: +productId,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}) satisfies GetServerSideProps
