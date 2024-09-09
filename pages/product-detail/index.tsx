import {
  ProductInfoWrapper,
  ReviewWrapper,
  StatisticsWrapper,
} from '@features/product-detail/components'
import { STATISTICS_MOCK } from '@features/product-detail/constants'

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
