import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Profile from '@/src/pages/profile/Profile'
import { axiosInstance } from '@shared/config'
import { fetchMyProfile } from '@shared/api'
import { useFetchMyProfile } from '@shared/hooks/query/user.query'

export default function MyProfilePage() {
  const router = useRouter()

  const { data: myProfileData } = useFetchMyProfile()

  useEffect(() => {
    if (!myProfileData) {
      router.push('/sign-in')
    }
  }, [myProfileData, router])

  if (!myProfileData) return null

  return <Profile />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.cookies.auth

  if (!cookie) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }

  try {
    const token = JSON.parse(cookie).accessToken
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const queryClient = new QueryClient()

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
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }
}
