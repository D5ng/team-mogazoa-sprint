import axiosInstance from '@app/config/axios-instance'
import {
  UserItem,
  UserRanking,
  UsersProductResponse,
  UserProfileParamas,
  UserProfileUpdateResponse,
} from '../types'

export async function fetchMyProfile() {
  return (await axiosInstance.get<UserItem>(`/users/me`)).data
}

export async function fetchUserRanking() {
  return (await axiosInstance.get<UserRanking>(`/users/ranking`)).data
}

export async function fetchUserProfile(userId: number) {
  return (await axiosInstance.get<UserItem>(`/users/${userId}`)).data
}

export async function fetchUsersProducts(userId: number) {
  return (
    await axiosInstance.get<UserItem>(`/users/${userId}/created-products`)
  ).data
}

export async function fetchUsersReviewdProduct(userId: number) {
  return (
    await axiosInstance.get<UserItem>(`/users/${userId}/reviewed-products`)
  ).data
}

export async function fetchUsersCreatedProduct(userId: number) {
  return (
    await axiosInstance.get<UsersProductResponse>(
      `/users/${userId}/created-products`,
    )
  ).data
}

export async function fetchUsersFavoritedProduct(userId: number) {
  return (
    await axiosInstance.get<UsersProductResponse>(
      `/users/${userId}/favorite-products`,
    )
  ).data
}

export async function fetchUsersFalowees(userId: number) {
  return (
    await axiosInstance.get<UsersProductResponse>(`/users/${userId}/folowees`)
  ).data
}

export async function fetchUsersFalowers(userId: number) {
  return (
    await axiosInstance.get<UsersProductResponse>(`/users/${userId}/folowers`)
  ).data
}

export async function updateMyProfile(data: UserProfileParamas) {
  return (
    await axiosInstance.patch<UserProfileUpdateResponse>(`/users/me`, data)
  ).data
}
