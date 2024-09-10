import Gnb from '@/src/widgets/Gnb/Gnb'
import { ProductInfoWrapper } from '@features/product-detail/components'
import { STATISTICS_MOCK } from '@features/product-detail/constants'

export default function index() {
  return <ProductInfoWrapper {...STATISTICS_MOCK} />
}
