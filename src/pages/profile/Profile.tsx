import { ActivityLog } from '@/src/widgets/profile/components'
import ProfileCard from '@/src/widgets/profile/components/profile-card/ProfileCard'

export default function Profile() {
  return (
    <main className="flex justify-center gap-[60px] w-full mt-[160px] tablet:flex-col tablet:px-28 mobile:mt-[130px] mobile:px-4">
      <ProfileCard />
      <div className="flex flex-col gap-[60px]">
        <ActivityLog />
        <section className="col-start-2 tablet:col-start-1">카드자리</section>
      </div>
    </main>
  )
}
