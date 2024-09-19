import FavoriteProductsList from './FavoriteProductsList'
import { UserId } from '@shared/types'
import { Suspense } from 'react'

export default function FavoriteProducts({ userId }: UserId) {
  return (
    <Suspense fallback={<div></div>}>
      <FavoriteProductsList userId={userId} />
    </Suspense>
  )
}
