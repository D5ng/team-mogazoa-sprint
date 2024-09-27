import { axiosInstance } from '@shared/config'
import type { CreateReviewPayload, ReviewId, UpdateReview } from '@shared/types'

export async function likeReview({ reviewId }: ReviewId) {
  return (await axiosInstance.post(`/reviews/${reviewId}/like`)).data
}

export async function cancelLikeReview({ reviewId }: ReviewId) {
  return (await axiosInstance.delete(`/reviews/${reviewId}/like`)).data
}

export async function createReview(data: CreateReviewPayload) {
  return (await axiosInstance.post(`/reviews`, data)).data
}

export async function updateReview({ reviewId, ...data }: UpdateReview) {
  return (await axiosInstance.patch(`/reviews/${reviewId}`, data)).data
}

export async function deleteReview({ reviewId }: ReviewId) {
  return (await axiosInstance.delete(`/reviews/${reviewId}`)).data
}
