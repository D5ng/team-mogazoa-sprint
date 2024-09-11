import {
  ProductInfoWrapper,
  ReviewWrapper,
  StatisticsWrapper,
} from '@widgets/product-detail/components'
import { STATISTICS_MOCK } from '@widgets/product-detail/constants'

export default function index() {
  return (
    <main className="w-[940px] m-auto mt-[60px] tablet:w-full">
      <section>
        <ProductInfoWrapper {...STATISTICS_MOCK} />
      </section>
      <section className="mt-[80px]">
        <StatisticsWrapper {...STATISTICS_MOCK} />
      </section>
      <section className="mt-[80px]">
        <ReviewWrapper />
      </section>
    </main>
  )
}
