import { twMerge } from 'tailwind-merge'
import { useFetchMyProfile } from '@shared/hooks/query/user.query'
import {
  ProfileHeader,
  ProfileStats,
  MyProfileButton,
} from '@widgets/profile/components'

export default function MyProfileCard({ ...props }) {
  const { data: myData } = useFetchMyProfile()
  if (!myData) return null
  //ErrorBoundary
  //TODO: 페이지끼리 연결 됐을 때, myProfile에 해당하는 userId로 url 접근 시 접근하지 못하도록 막아야함

  return (
    <section
      className={twMerge(
        'flex flex-col justify-center items-center gap-[30px] w-[340px] h-[600px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:h-[510px] tablet:px-[30px] mobile:h-[495px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileHeader {...myData} />
      <ProfileStats userId={myData?.id} userData={myData} />
      <MyProfileButton />
    </section>
  )
}