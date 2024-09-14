import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { fetchMyProfile } from '@shared/api'

export default function MyProfilePage() {
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
    console.error(error)
    return { notFound: true }
  }
}
