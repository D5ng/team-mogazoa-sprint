import { Suspense } from 'react'
import FavoriteProductsList from './FavoriteProductsList'
import type { UserId } from '@shared/types'

export default function FavoriteProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <FavoriteProductsList userId={userId} />
    </Suspense>
  )
}
