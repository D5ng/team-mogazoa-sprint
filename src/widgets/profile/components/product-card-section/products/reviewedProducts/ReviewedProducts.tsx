import { Suspense } from 'react'
import ReviewedProductsList from './ReviewedProductsList'
import type { UserId } from '@shared/types'

export default function ReviewedProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <ReviewedProductsList userId={userId} />
    </Suspense>
  )
}
