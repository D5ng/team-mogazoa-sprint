import { axiosInstance } from '@shared/config'
import type {
  UserItem,
  UserRanking,
  followerProductResponse,
  followeesProductResponse,
  UsersProductResponse,
  UpdateMyProfile,
  UserProfileUpdateResponse,
  UserId,
  CursorParams,
} from '@shared/types'

export async function fetchMyProfile() {
  return (await axiosInstance.get<UserItem>(`/users/me`)).data
}

export async function updateMyProfile(data: UpdateMyProfile) {
  return (
    await axiosInstance.patch<UserProfileUpdateResponse>(`/users/me`, data)
  ).data
}

export async function fetchUserRanking() {
  return (await axiosInstance.get<UserRanking>(`/users/ranking`)).data
}

export async function fetchUserProfile({ userId }: UserId) {
  return (await axiosInstance.get<UserItem>(`/users/${userId}`)).data
}

export async function fetchUsersReviewedProduct({
  userId,
  cursor,
}: CursorParams & UserId) {
  return (
    await axiosInstance.get<UsersProductResponse>(
      `/users/${userId}/reviewed-products?cursor=${cursor}`,
    )
  ).data
}

export async function fetchUsersCreatedProduct({
  userId,
  cursor,
}: CursorParams & UserId) {
  return (
    await axiosInstance.get<UsersProductResponse>(
      `/users/${userId}/created-products?cursor=${cursor}`,
    )
  ).data
}

export async function fetchUsersFavoriteProduct({
  userId,
  cursor,
}: CursorParams & UserId) {
  return (
    await axiosInstance.get<UsersProductResponse>(
      `/users/${userId}/favorite-products?cursor=${cursor}`,
    )
  ).data
}

export async function fetchUsersFollowees({
  userId,
  cursor,
}: CursorParams & UserId) {
  return (
    await axiosInstance.get<followeesProductResponse>(
      `/users/${userId}/followees?cursor=${cursor}`,
    )
  ).data
}

export async function fetchUsersFollowers({
  userId,
  cursor,
}: CursorParams & UserId) {
  return (
    await axiosInstance.get<followerProductResponse>(
      `/users/${userId}/followers?cursor=${cursor}`,
    )
  ).data
}
