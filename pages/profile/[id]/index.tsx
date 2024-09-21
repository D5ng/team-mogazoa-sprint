import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { fetchUserProfile } from '@shared/api'
import { axiosInstance } from '@shared/config'

export default function ProfilePage({
  userId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Profile userId={userId} />
}

export const getServerSideProps: GetServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth

  if (cookie) {
    const token = JSON.parse(cookie).accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    axiosInstance.defaults.headers.common['Authorization'] = ``
  }

  const userId = Number(context.params?.id)
  if (!userId) return { notFound: true }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['user-profile', userId],
      queryFn: () => fetchUserProfile({ userId: +userId }),
    })

    const data = queryClient.getQueryData(['user-profile', userId])

    if (!data) return { notFound: true }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        userId: +userId,
        cookie: cookie ? cookie : null,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}) satisfies GetServerSideProps
