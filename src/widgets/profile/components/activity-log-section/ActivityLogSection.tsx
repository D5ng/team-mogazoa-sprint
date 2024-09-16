import { LogList } from '@widgets/profile/components/activity-log-section'
import { ProfileLayout } from '@widgets/profile/components'
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
    <ProfileLayout title="활동 내역">
      <LogList {...userData} />
    </ProfileLayout>
  )
}
