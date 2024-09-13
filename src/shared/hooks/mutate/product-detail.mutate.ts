import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createReview, likeReview, cancelLikeReview } from '@shared/api'

export function useCreateReview() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail'] })
      queryClient.invalidateQueries({ queryKey: ['product-detail-review'] })
    },
  })
}

export function useReviewLike() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: likeReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail-review'] })
    },
  })
}

export function useReviewCancelLike() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: cancelLikeReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail-review'] })
    },
  })
}
