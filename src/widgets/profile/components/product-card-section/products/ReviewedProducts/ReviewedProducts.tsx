import { Suspense } from 'react'
import type { UserId } from '@shared/types'
import ReviewedProductsList from './ReviewedProductsList'

export default function ReviewedProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <ReviewedProductsList userId={userId} />
    </Suspense>
  )
}
