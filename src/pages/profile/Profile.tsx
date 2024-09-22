import {
  ActivityLogSection,
  ProductCardSection,
  MyProfileCard,
  UserProfileCard,
} from '@widgets/profile/components'
import type { ProfileProps } from './Profile.type'
import { getAuthUser } from '@shared/utils'

export default function Profile({ userId }: ProfileProps) {
  const user = getAuthUser()
  const isMyProfile = !userId || user?.id === userId
  const id = isMyProfile ? user?.id : userId

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
