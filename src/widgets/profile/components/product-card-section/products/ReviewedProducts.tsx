import { Suspense } from 'react'
import type { UserId } from '@shared/types'
import ProfileProductsList from '@/src/widgets/profile/components/product-card-section/products/ProfileProductsList'

export default function ReviewedProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <ProfileProductsList userId={userId} />
    </Suspense>
  )
}
