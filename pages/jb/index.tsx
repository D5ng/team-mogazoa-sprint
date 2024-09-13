import { STATISTICS_MOCK } from '@/src/widgets/product-detail/constants'
import { StatisticsList } from '@widgets/product-detail/components'

export default function index() {
  return (
    <div>
      <StatisticsList {...STATISTICS_MOCK} />
    </div>
  )
}
