import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from '@shared/api'

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['fetchProducts', 'ratedCount'],
      })
      queryClient.invalidateQueries({
        queryKey: ['fetchProducts', 'reviewCount'],
      })
    },
  })
}
