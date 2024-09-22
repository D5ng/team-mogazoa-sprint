import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { fetchProducts } from '@shared/api'
import { axiosInstance } from '@shared/config'
import { productKeys } from '@shared/hooks/query-keys'
import { AuthResponse, ProductResponse } from '@shared/types'
import { CATEGORY_CHIPS } from '@/src/shared/ui'
import { ProductCategoryPage } from '@/src/pages'
import { NextSeo } from 'next-seo'

export default function Index({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo
        title={`모가조아 - ${category.name}의 모든 상품`}
        description={`${category.name}의 모든 상품을 확인하고 리뷰 달아보세요.`}
      />
      <ProductCategoryPage category={category} />
    </>
  )
}

export const getServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth
  const parseCookie: AuthResponse | null = cookie ? JSON.parse(cookie) : null

  if (parseCookie) {
    const token = parseCookie.accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  const categoryId = +context.params?.id!
  if (!categoryId) return { notFound: true }

  const category = CATEGORY_CHIPS.find((category) => category.id === categoryId)
  if (!category) return { notFound: true }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: productKeys.productsByCategory(category.id),
      queryFn: () => fetchProducts({ category: category.id }),
    })

    const data = queryClient.getQueryData<ProductResponse>(
      productKeys.productsByCategory(category.id),
    )

    if (!data) return { notFound: true }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        category: category,
        loggedInUserId: parseCookie && parseCookie.user.id,
        cookie: cookie ? cookie : null,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}) satisfies GetServerSideProps
