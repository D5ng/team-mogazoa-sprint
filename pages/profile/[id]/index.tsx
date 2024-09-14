import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { fetchUserProfile } from '@shared/api'
import {
  useFetchMyProfile,
  useFetchUserProfile,
} from '@shared/hooks/query/user.query'
import useAuthStore from '@app/provider/authStore'

export default function ProfilePage({
  userId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const user = useAuthStore((state) => state.user)
  const isMyProfile = user?.id === userId

  const { data: myProfile } = useFetchMyProfile()
  const { data: userProfile } = useFetchUserProfile(userId)

  const profileData = isMyProfile ? myProfile : userProfile
  if (!profileData) return <div></div>

  return <Profile profileData={profileData} isMyProfile={isMyProfile} />
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
    return { notFound: true }
  }
}
