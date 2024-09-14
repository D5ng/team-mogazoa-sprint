import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {
  createReview,
  likeReview,
  cancelLikeReview,
  deleteReview,
  updateReview,
} from '@shared/api'
import { ProductReviewsResponse } from '@shared/types'
import { ReviewSortOptions } from '@widgets/product-detail/constants'

interface ReviewParams {
  productId: number
  order: ReviewSortOptions
}

export function useCreateReview({ productId, order }: ReviewParams) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: createReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail', productId] })
      queryClient.invalidateQueries({
        queryKey: ['product-detail-review', productId, order],
      })
    },
  })
}
export function useUpdateReview({ productId, order }: ReviewParams) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail', productId] })
      queryClient.invalidateQueries({
        queryKey: ['product-detail-review', productId, order],
      })
    },
  })
}

export function useReviewLike({ productId, order }: ReviewParams) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: likeReview,
    onMutate: async ({ reviewId }) => {
      await queryClient.cancelQueries({
        queryKey: ['product-detail-review', productId],
      })

      const previousLike = queryClient.getQueryData<
        InfiniteData<ProductReviewsResponse, number>
      >(['product-detail-review', productId, order])

      const updatePage = previousLike?.pages.map((page) => ({
        ...page,
        list: page.list.map((review) =>
          review.id === reviewId
            ? { ...review, likeCount: review.likeCount + 1, isLiked: true }
            : review,
        ),
      }))

      const updater = {
        ...previousLike,
        pages: updatePage,
      }

      queryClient.setQueryData(
        ['product-detail-review', productId, order],
        updater,
      )

      return { previousLike }
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['product-detail-review', productId, order],
        context?.previousLike,
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['product-detail-review', productId, order],
      })
    },
  })
}

export function useReviewCancelLike({ productId, order }: ReviewParams) {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: cancelLikeReview,
    onMutate: async ({ reviewId }) => {
      await queryClient.cancelQueries({
        queryKey: ['product-detail-review', productId],
      })

      const previousLike = queryClient.getQueryData<
        InfiniteData<ProductReviewsResponse, number>
      >(['product-detail-review', productId, order])

      const updatePage = previousLike?.pages.map((page) => ({
        ...page,
        list: page.list.map((review) =>
          review.id === reviewId
            ? { ...review, likeCount: review.likeCount - 1, isLiked: false }
            : review,
        ),
      }))

      const updater = {
        ...previousLike,
        pages: updatePage,
      }

      queryClient.setQueryData(
        ['product-detail-review', productId, order],
        updater,
      )

      return { previousLike }
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData(
        ['product-detail-review', productId, order],
        context?.previousLike,
      )
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['product-detail-review', productId, order],
      })
    },
  })
}

export function useDeleteReview() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['product-detail-review'] })
    },
  })
}
