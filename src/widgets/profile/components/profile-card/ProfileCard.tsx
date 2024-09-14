import { twMerge } from 'tailwind-merge'
import { ProfileImageSection, ProfileStats } from '@widgets/profile/components'
import { Button } from '@shared/ui'
import useAuthStore from '@app/provider/authStore'
import {
  useFetchMyProfile,
  useFetchUserProfile,
} from '@/src/shared/hooks/query/user.query'

export interface ProfileProps {
  userId: number | undefined
  className?: string
}

export default function ProfileCard({ userId, ...props }: ProfileProps) {
  const user = useAuthStore((state) => state.user)
  const isMyProfile = userId === user?.id
  const { data: userData } = isMyProfile
    ? useFetchMyProfile()
    : useFetchUserProfile(userId)

  if (!userData) return null
  //ErrorBoundary

  return (
    <section
      className={twMerge(
        'flex flex-col justify-center items-center gap-[30px] w-[340px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileImageSection userData={userData} />
      <ProfileStats userData={userData} />
      <Button variant="primary">팔로우</Button>
    </section>
  )
}
