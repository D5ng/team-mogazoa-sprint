import { twMerge } from 'tailwind-merge'
import { useFetchMyProfile } from '@shared/hooks/query'
import {
  ProfileHeader,
  ProfileStats,
  MyProfileButton,
} from '@widgets/profile/components'

export default function MyProfileCard({ ...props }) {
  const { data: myData } = useFetchMyProfile()
  if (!myData) return null

  return (
    <section
      className={twMerge(
        'sticky top-[100px] flex flex-col justify-center items-center gap-[30px] w-[340px] h-fit px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:static tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileHeader {...myData} />
      <ProfileStats userId={myData?.id} userData={myData} />
      <MyProfileButton />
    </section>
  )
}
