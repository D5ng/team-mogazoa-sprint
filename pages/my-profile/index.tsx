import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Profile from '@/src/pages/profile/Profile'
import { useUserStore } from '@shared/store'
import { useFetchMyProfile } from '@shared/hooks/query/user.query'

export default function MyProfilePage() {
  const router = useRouter()
  const { user } = useUserStore()

  const { data: myProfileData } = useFetchMyProfile()

  useEffect(() => {
    if (!user) {
      router.push('/sign-in')
    }
  }, [user, router])

  if (!myProfileData) return null

  return <Profile />
}
