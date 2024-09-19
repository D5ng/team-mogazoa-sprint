import CreatedProductsList from './CreatedProductsList'
import { UserId } from '@shared/types'
import { Suspense } from 'react'

export default function CreatedProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <CreatedProductsList userId={userId} />
    </Suspense>
  )
}
