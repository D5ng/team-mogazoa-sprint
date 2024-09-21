import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  updateProduct,
  favoriteProduct,
  cancelFavoriteProduct,
} from '@shared/api'
import { ProductDetailResponse } from '@shared/types'

type ProductId = { productId: number }

export function useUpdateProduct({ productId }: ProductId) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail', productId] })
    },
  })
}

export function useProductFavorite({ productId }: ProductId) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: favoriteProduct,
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries({
        queryKey: ['product-detail', productId],
      })

      const previousFavorite = queryClient.getQueryData<ProductDetailResponse>([
        'product-detail',
        productId,
      ])!

      const updater: ProductDetailResponse = {
        ...previousFavorite,
        isFavorite: true,
        favoriteCount: previousFavorite.favoriteCount + 1,
      }

      queryClient.setQueryData(['product-detail', productId], updater)

      return { previousFavorite }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['product-detail', productId],
        context?.previousFavorite,
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail', productId] })
    },
  })
}

export function useProductCancelFavorite({ productId }: ProductId) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: cancelFavoriteProduct,
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries({
        queryKey: ['product-detail', productId],
      })

      const previousFavorite = queryClient.getQueryData<ProductDetailResponse>([
        'product-detail',
        productId,
      ])!

      const updater: ProductDetailResponse = {
        ...previousFavorite,
        isFavorite: false,
        favoriteCount:
          previousFavorite.favoriteCount === 0
            ? 0
            : previousFavorite.favoriteCount - 1,
      }

      queryClient.setQueryData(['product-detail', productId], updater)

      return { previousFavorite }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['product-detail', productId],
        context?.previousFavorite,
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail', productId] })
    },
  })
}
