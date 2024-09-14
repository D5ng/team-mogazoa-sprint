import { LogList } from '@widgets/profile/components/activity-log'
import { ProfileLayout } from '@widgets/profile/components/layout'
import useAuthStore from '@app/provider/authStore'
import {
  useFetchMyProfile,
  useFetchUserProfile,
} from '@shared/hooks/query/user.query'

interface ActivityLogProps {
  userId: number | undefined
}

export default function ActivityLog({ userId }: ActivityLogProps) {
  const user = useAuthStore((state) => state.user)
  const isMyProfile = userId === user?.id
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
