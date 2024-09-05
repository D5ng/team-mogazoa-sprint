import React from 'react'
import { ProductDetailLayout } from '@features/product-detail/layout'
import LatestDropdown from '../latest-dropdown/LatestDropdown'
import ReviewCard from '../card/ReviewCard'
import ReviewList from '../list/ReviewList'

export default function ReviewWrapper() {
  return (
    <ProductDetailLayout title="상품 리뷰" renderDropdown={<LatestDropdown />}>
      <ReviewList />
    </ProductDetailLayout>
  )
}
