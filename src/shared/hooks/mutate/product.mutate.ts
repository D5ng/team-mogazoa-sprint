import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  cancelFavoriteProduct,
  createProduct,
  deleteProduct,
  favoriteProduct,
  updateProduct,
} from '@shared/api'
import { productKeys } from '@shared/hooks/query-keys'
import { ProductDetailResponse } from '@shared/types'

type ProductId = { productId: number }

export function useCreateProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: productKeys.productsByRating,
      })
      queryClient.invalidateQueries({
        queryKey: productKeys.productsByReview,
      })

      queryClient.invalidateQueries({
        queryKey: productKeys.productsByCategory(data.categoryId),
      })
    },
  })
}

export function useUpdateProduct({ productId }: ProductId) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(productId),
      }),
  })
}

export function useDeleteProduct() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.productsByRating,
      })
      queryClient.invalidateQueries({
        queryKey: productKeys.productsByReview,
      })
    },
  })
}

export function useProductFavorite() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: favoriteProduct,
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries({
        queryKey: productKeys.detail(productId),
      })

      const previousFavorite = queryClient.getQueryData<ProductDetailResponse>(
        productKeys.detail(productId),
      )!

      const updater: ProductDetailResponse = {
        ...previousFavorite,
        isFavorite: true,
        favoriteCount: previousFavorite.favoriteCount + 1,
      }

      queryClient.setQueryData(productKeys.detail(productId), updater)
      return { previousFavorite }
    },

    onError: (err, { productId }, context) =>
      queryClient.setQueryData(
        productKeys.detail(productId),
        context?.previousFavorite,
      ),

    onSettled: (_data, _error, { productId }) => {
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(productId),
      })
    },
  })
}

export function useProductCancelFavorite() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: cancelFavoriteProduct,
    onMutate: async ({ productId }) => {
      await queryClient.cancelQueries({
        queryKey: productKeys.detail(productId),
      })

      const previousFavorite = queryClient.getQueryData<ProductDetailResponse>(
        productKeys.detail(productId),
      )!

      const updater: ProductDetailResponse = {
        ...previousFavorite,
        isFavorite: false,
        favoriteCount:
          previousFavorite.favoriteCount === 0
            ? 0
            : previousFavorite.favoriteCount - 1,
      }

      queryClient.setQueryData(productKeys.detail(productId), updater)

      return { previousFavorite }
    },
    onError: (err, { productId }, context) =>
      queryClient.setQueryData(
        productKeys.detail(productId),
        context?.previousFavorite,
      ),

    onSettled: (_data, _error, { productId }) =>
      queryClient.invalidateQueries({
        queryKey: productKeys.detail(productId),
      }),
  })
}
