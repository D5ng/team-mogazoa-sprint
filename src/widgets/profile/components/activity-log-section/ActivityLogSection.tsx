import LogList from './LogList'
import { useFetchUserProfile } from '@shared/hooks/query/user.query'
import type { UserIdProp } from '@shared/types'

export default function ActivityLogSection({ userId }: UserIdProp) {
  const { data: userData } = useFetchUserProfile(userId)

  return (
    <section className="flex flex-col gap-y-[30px] text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-white tablet:text-lg">활동 내역</h2>
      </div>
      <LogList {...userData!} />
    </section>
  )
}
