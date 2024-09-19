import {
  ActivityLogSection,
  ProductCardSection,
  MyProfileCard,
  UserProfileCard,
} from '@widgets/profile/components'
import { useFetchMyProfile } from '@shared/hooks/query/user.query'
import type { ProfileProps } from './Profile.type'

export default function Profile({ userId }: ProfileProps) {
  const { data: myProfileData } = useFetchMyProfile()
  const isMyProfile = !userId || userId === myProfileData?.id
  const id = isMyProfile ? myProfileData?.id : userId

  return (
    <main className="flex justify-center gap-[60px] w-full mt-[160px] tablet:flex-col tablet:px-28 mobile:mt-[130px] mobile:px-4">
      {isMyProfile ? <MyProfileCard /> : <UserProfileCard userId={userId} />}
      <div className="flex flex-col gap-[60px]">
        <ActivityLogSection userId={id} />
        <ProductCardSection userId={id} />
      </div>
    </main>
  )
}
