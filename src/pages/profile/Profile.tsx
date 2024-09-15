import { ProfileCard } from '@widgets/profile/components'
import { ActivityLog } from '@widgets/profile/components'
import { ProfileProps } from './Profile.type'

export default function Profile({ userId }: ProfileProps) {
  return (
    <main className="flex justify-center gap-[60px] w-full mt-[160px] tablet:flex-col tablet:px-28 mobile:mt-[130px] mobile:px-4">
      <ProfileCard userId={userId} />
      <div className="flex flex-col gap-[60px]">
        <ActivityLog userId={userId} />
        <section className="col-start-2 tablet:col-start-1">카드자리</section>
      </div>
    </main>
  )
}
