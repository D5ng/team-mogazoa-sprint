import ProfileStats from './stats/ProfileStats'
import ProfileImageSection from './image-section/ProfileImageSection'
import { Button } from '@shared/ui'

export default function ProfileCard({ ...props }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] w-[340px] px-5 py-[30px] bg-black-60 border border-black-70 rounded-xl tablet:w-full tablet:px-[30px] mobile:px-5">
      <ProfileImageSection />
      <ProfileStats />
      <Button variant="primary">팔로우</Button>
    </div>
  )
}
