import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchProductDetail } from '@shared/api'
import {
  ProductInfoWrapper,
  ReviewWrapper,
  StatisticsWrapper,
} from '@widgets/product-detail/components'

export default function ProductDetailPage({
  productId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="w-[940px] m-auto mt-[60px] tablet:w-full">
      <section>
        <ProductInfoWrapper productId={productId} />
      </section>
      <section className="mt-[80px]">
        <StatisticsWrapper productId={productId} />
      </section>
      <section className="mt-[80px]">
        <ReviewWrapper />
      </section>
    </main>
  )
}

export const getServerSideProps = (async (context) => {
  const productId = context.params!.id
  if (!productId) return { notFound: true }

  try {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
      queryKey: ['product-detail'],
      queryFn: () => fetchProductDetail({ productId: +productId }),
    })
    const data = queryClient.getQueryData(['product-detail'])
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
