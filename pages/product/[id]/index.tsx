import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchProductDetail } from '@shared/api'
import { ProductDetailPage } from '@/src/pages/'
import { axiosInstance } from '@shared/config'
import type { AuthResponse, ProductDetailResponse } from '@shared/types'

export default function Index({
  product,
  loggedInUserId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <ProductDetailPage {...product} loggedInUserId={loggedInUserId} />
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth
  const parseCookie: AuthResponse | null = cookie ? JSON.parse(cookie) : null

  if (parseCookie) {
    const token = parseCookie.accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const productId = +context.params?.id!
  if (!productId) return { notFound: true }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['product-detail', productId],
      queryFn: () => fetchProductDetail({ productId: +productId }),
    })

    const data = queryClient.getQueryData<ProductDetailResponse>([
      'product-detail',
      productId,
    ])

    if (!data) return { notFound: true }

    console.log(parseCookie)

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        product: data,
        loggedInUserId: parseCookie && parseCookie.user.id,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}) satisfies GetServerSideProps
