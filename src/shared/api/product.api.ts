import { axiosInstance } from '@shared/config'
import type {
  FetchProducts,
  FetchProductsReviews,
  ProductDetailResponse,
  ProductId,
  ProductResponse,
  ProductPayload,
  ProductReviewsResponse,
} from '@shared/types'

export async function fetchProducts({
  keyword,
  category,
  order,
  cursor,
}: FetchProducts) {
  return (await axiosInstance.get<ProductResponse>(`/products`)).data
}

export async function fetchProductDetail({ productId }: ProductId) {
  return (
    await axiosInstance.get<ProductDetailResponse>(`/products/${productId}`)
  ).data
}

export async function createProduct(data: ProductPayload) {
  return (await axiosInstance.post(`/products`, data)).data
}

export async function updateProduct({
  productId,
  ...data
}: ProductPayload & ProductId) {
  return (
    await axiosInstance.patch<ProductPayload>(`/products/${productId}`, data)
  ).data
}

export async function deleteProduct({ productId }: ProductId) {
  return (await axiosInstance.delete(`/products/${productId}`)).data
}

export async function fetchProductsReviews({
  productId,
  order = 'recent',
  cursor = 0,
}: FetchProductsReviews) {
  return (
    await axiosInstance.get<ProductReviewsResponse>(
      `/products/${productId}/reviews?cursor=${cursor}&order=${order}`,
    )
  ).data
}

export async function favoriteProduct({ productId }: ProductId) {
  return (await axiosInstance.post(`/products/${productId}/favorite`)).data
}

export async function deleteFavoriteProduct({ productId }: ProductId) {
  return (await axiosInstance.delete(`/products/${productId}/favorite`)).data
}
