import { LogList } from '@widgets/profile/components'
import {
  useFetchMyProfile,
  useFetchUserProfile,
} from '@shared/hooks/query/user.query'

interface ActivityLogSectionProps {
  userId: number | undefined
}

export default function ActivityLogSection({
  userId,
}: ActivityLogSectionProps) {
  const isMyProfile = !userId
  const { data: userData } = isMyProfile
    ? useFetchMyProfile()
    : useFetchUserProfile(userId)

  if (!userData) return null

  return (
    <section className="text-xl font-normal flex flex-col gap-y-[30px] text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white tablet:text-base mobile:text-lg">
          활동 내역
        </h2>
      </div>
      <LogList {...userData} />
    </section>
  )
}
