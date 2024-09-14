import { twMerge } from 'tailwind-merge'
import { ProfileImageSection, ProfileStats } from '@widgets/profile/components'
import { Button } from '@shared/ui'
import type { UserItem } from '@shared/types'

export interface ProfileProps {
  profileData: UserItem
  isMyProfile: boolean
  className?: string
}

export default function ProfileCard({
  profileData,
  isMyProfile,
  ...props
}: ProfileProps) {
  return (
    <section
      className={twMerge(
        'flex flex-col justify-center items-center gap-[30px] w-[340px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileImageSection profileData={profileData} />
      <ProfileStats />
      <Button variant="primary">팔로우</Button>
    </section>
  )
}
