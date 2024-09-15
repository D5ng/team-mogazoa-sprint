import { twMerge } from 'tailwind-merge'
import {
  ProfileButton,
  MyProfileButton,
  ProfileImageSection,
  ProfileStats,
} from '@widgets/profile/components'
import { useFetchUserProfile } from '@/src/shared/hooks/query/user.query'
import { useUserStore } from '@shared/store'

interface ProfileProps {
  userId: number
  className?: string
}

export default function ProfileCard({ userId, ...props }: ProfileProps) {
  const { user } = useUserStore()
  const isMyProfile = user?.id === userId

  const { data: userData } = useFetchUserProfile(userId)
  if (!userData) return null
  //ErrorBoundary
  //TODO: 페이지끼리 연결 됐을 때, myProfile에 해당하는 userId로 url 접근 시 접근하지 못하도록 막아야함

  return (
    <section
      className={twMerge(
        'flex flex-col justify-center items-center gap-[30px] w-[340px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileImageSection {...userData} />
      <ProfileStats userId={userId} userData={userData} />
      {isMyProfile ? (
        <MyProfileButton />
      ) : (
        <ProfileButton isFollowing={userData.isFollowing} userId={userId} />
      )}
    </section>
  )
}
