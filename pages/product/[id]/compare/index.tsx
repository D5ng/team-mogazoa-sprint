import ComparePage from '@/src/pages/compare'
import { useRouter } from 'next/router'

export default function CompareWithSelectedProduct() {
  const router = useRouter()
  const { id } = router.query
  return <ComparePage id={id} />
}
