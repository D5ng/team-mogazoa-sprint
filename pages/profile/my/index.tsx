import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { axiosInstance } from '@shared/config'
import { fetchMyProfile } from '@shared/api'
import { useFetchMyProfile } from '@shared/hooks/query/user.query'

export default function MyProfilePage() {
  const { data: myProfileData } = useFetchMyProfile()

  if (!myProfileData) return null

  return <Profile />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.cookies.auth

  if (!cookie) return { props: {} }

  try {
    const parsedCookie = JSON.parse(cookie)
    if (typeof parsedCookie !== 'object' || !parsedCookie.accessToken) {
      throw new Error('Invalid cookie format')
    }

    const token = parsedCookie.accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
      queryKey: ['my-profile'],
      queryFn: fetchMyProfile,
    })

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        cookie: cookie ? cookie : null,
      },
    }
  } catch (error) {
    console.error(error)
    return { props: {} }
  }
}
