import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createReview } from '@shared/api'

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
