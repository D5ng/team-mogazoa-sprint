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

  return (
    <section
      className={twMerge(
        'sticky top-[100px] flex flex-col justify-center items-center gap-[30px] w-[340px] h-fit px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:static tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileHeader {...userData} />
      <ProfileStats userId={userId} userData={userData} />
      <UserProfileButton isFollowing={userData.isFollowing} userId={userId} />
    </section>
  )
}
