import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { fetchMyProfile } from '@shared/api'
import { axiosInstance } from '@shared/config'

export default function MyProfilePage({
  myId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Profile userId={myId} />
}

export const getServerSideProps: GetServerSideProps = (async (context) => {
  const cookie = context.req.cookies.auth

  if (!cookie) {
    return { notFound: true }
  }

  const parsedCookie = JSON.parse(cookie)
  const token = parsedCookie.accessToken
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const myId = Number(parsedCookie?.user?.id)
  if (!myId) return { notFound: true }

  try {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['my-profile'],
      queryFn: fetchMyProfile,
    })

    const data = queryClient.getQueryData(['my-profile'])

    if (!data) return { notFound: true }

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        myId: +myId,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}) satisfies GetServerSideProps
