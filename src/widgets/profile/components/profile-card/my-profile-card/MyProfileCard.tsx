import { twMerge } from 'tailwind-merge'
import { useFetchMyProfile } from '@/src/shared/hooks/query/user.query'
import {
  ProfileImageSection,
  ProfileStats,
  MyProfileButton,
} from '@/src/widgets/profile/components'
import { useUserStore } from '@/src/shared/store'

export default function MyProfileCard({ ...props }) {
  const { data: myData } = useFetchMyProfile()
  const { user } = useUserStore()
  const userId = user?.id
  if (!myData) return null
  //ErrorBoundary
  //TODO: 페이지끼리 연결 됐을 때, myProfile에 해당하는 userId로 url 접근 시 접근하지 못하도록 막아야함

  return (
    <section
      className={twMerge(
        'flex flex-col justify-center items-center gap-[30px] w-[340px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5',
        props.className || '',
      )}
    >
      <ProfileImageSection {...myData} />
      <ProfileStats userId={userId} userData={myData} />
      <MyProfileButton />
    </section>
  )
}
