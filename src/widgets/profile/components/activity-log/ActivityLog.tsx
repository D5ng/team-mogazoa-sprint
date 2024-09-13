import { LogList } from '@widgets/profile/components/activity-log'
import { ProfileLayout } from '@widgets/profile/components/layout'
import { LOG_MOCK } from '@/src/widgets/profile/constants/ActivityLog.constants'

export default function ActivityLog() {
  return (
    <ProfileLayout title="활동 내역">
      <LogList {...LOG_MOCK} />
    </ProfileLayout>
  )
}
