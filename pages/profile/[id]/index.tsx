import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { fetchUserProfile } from '@shared/api'

export default function ProfilePage({
  userId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Profile userId={userId} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = Number(context.params?.id)
  const queryClient = new QueryClient()

  if (!userId) {
    return { notFound: true }
  }

  try {
    await queryClient.prefetchQuery({
      queryKey: ['user-profile', userId],
      queryFn: () => fetchUserProfile({ userId }),
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        userId,
      },
    }
  } catch (error) {
    console.error(error)
    return { notFound: true }
  }
}
