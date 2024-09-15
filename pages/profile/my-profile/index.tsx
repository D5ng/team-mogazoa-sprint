import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { fetchMyProfile } from '@shared/api'

export default function MyProfilePage({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return <Profile />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()

  try {
    await queryClient.prefetchQuery({
      queryKey: ['my-profile'],
      queryFn: fetchMyProfile,
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  } catch (error) {
    console.error('Failed to fetch my profile:', error)
    return { notFound: true }
  }
}
