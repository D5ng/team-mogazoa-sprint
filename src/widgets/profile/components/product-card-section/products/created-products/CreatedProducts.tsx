import { Suspense } from 'react'
import CreatedProductsList from './CreatedProductsList'
import type { UserId } from '@shared/types'

export default function CreatedProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <CreatedProductsList userId={userId} />
    </Suspense>
  )
}
