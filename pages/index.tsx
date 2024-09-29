import { GetServerSideProps } from 'next'
import ProductPage from '@/src/pages/product/Product'
import { axiosInstance } from '@shared/config'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchProducts } from '@/src/shared/api'
import { NextSeo } from 'next-seo'
import { CATEGORY_CHIPS } from '@/src/shared/ui'
import { productKeys } from '@/src/shared/hooks/query-keys'

export default function Home() {
  return (
    <>
      <NextSeo title="모가조아 - 모든 상품을 확인하고 리뷰를 달아보세요." />
      <ProductPage />
    </>
  )
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth
  const searchQuery = (context.query?.query || '') as string
  const categoryQuery = context.query.category

  const category = categoryQuery
    ? CATEGORY_CHIPS.find((category) => category.id === +categoryQuery) || null
    : null

  if (cookie) {
    const token = JSON.parse(cookie).accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    axiosInstance.defaults.headers.common['Authorization'] = ``
  }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: productKeys.productsBySearch(
        searchQuery,
        category ? category.id : null,
      ),
      queryFn: () =>
        category
          ? fetchProducts({ keyword: searchQuery, category: category.id })
          : fetchProducts({ keyword: searchQuery }),
    })

    await queryClient.prefetchQuery({
      queryKey: ['product', 'reviewCount'],
      queryFn: () => fetchProducts({ order: 'reviewCount' }),
    })

    await queryClient.prefetchQuery({
      queryKey: ['product', 'ratedCount'],
      queryFn: () => fetchProducts({ order: 'rating' }),
    })

    const hotData = queryClient.getQueryData(['product', 'reviewCount'])
    const ratedData = queryClient.getQueryData(['product', 'ratedCount'])

    if (!hotData && !ratedData) return { notFound: true }
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        cookie: cookie ? cookie : null,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}) satisfies GetServerSideProps
