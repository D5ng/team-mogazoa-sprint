import { twMerge } from 'tailwind-merge'

import { useFetchUserProfile } from '@shared/hooks/query/user.query'
import {
  ProfileHeader,
  ProfileStats,
  UserProfileButton,
} from '@widgets/profile/components'

interface UserProfileProps {
  userId: number
  className?: string
}

export default function UserProfileCard({
  userId,
  ...props
}: UserProfileProps) {
  const { data: userData } = useFetchUserProfile(userId)
  if (!userData) return null
  //ErrorBoundary
  //TODO: 페이지끼리 연결 됐을 때, myProfile에 해당하는 userId로 url 접근 시 접근하지 못하도록 막아야함

  return (
    <section
      className={twMerge(
        'sticky top-[100px] flex flex-col justify-center items-center gap-[30px] w-[340px] h-fit px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileHeader {...userData} />
      <ProfileStats userId={userId} userData={userData} />
      <UserProfileButton isFollowing={userData.isFollowing} userId={userId} />
    </section>
  )
}
