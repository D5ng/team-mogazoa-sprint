import axiosInstance from '@/src/app/config/axios-instance'
import { CreateReview, ReviewId, UpdateReview } from '@shared/types'

export async function likeReview({ reviewId }: ReviewId) {
  return (await axiosInstance.post(`/reviews/${reviewId}/like`)).data
}

export async function deleteLikeReview({ reviewId }: ReviewId) {
  return (await axiosInstance.delete(`/reviews/${reviewId}/like`)).data
}

export async function createReview(data: CreateReview) {
  return (await axiosInstance.post(`/reviews`, data)).data
}

export async function updateReview({ reviewId, ...data }: UpdateReview) {
  return (await axiosInstance.patch(`/reviews/${reviewId}`, data)).data
}

export async function deleteReview({ reviewId }: ReviewId) {
  return (await axiosInstance.delete(`/reviews/${reviewId}`)).data
}
