import { create } from 'zustand'
import {
  LATEST_DROPDOWN_ITEMS,
  ReviewSortOptions,
} from '@widgets/product/product-detail/constants'

interface ReviewStore {
  option: ReviewSortOptions
  onSelectedOption: (selectedOption: ReviewSortOptions) => void
}

export const useReviewOptionStore = create<ReviewStore>((set) => {
  return {
    option: LATEST_DROPDOWN_ITEMS[0].value,
    onSelectedOption: (selectedOption: ReviewSortOptions) =>
      set(() => ({ option: selectedOption })),
  }
})

export default useReviewOptionStore
