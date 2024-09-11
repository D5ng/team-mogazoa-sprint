import { axiosInstance } from '@shared/config'
import type {
  FetchProducts,
  FetchProductsReviews,
  ProductDetailResponse,
  ProductId,
  ProductResponse,
  SendProductType,
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

export async function createProduct(data: SendProductType) {
  return (await axiosInstance.post(`/products`, data)).data
}

export async function updateProduct({
  productId,
  ...data
}: SendProductType & ProductId) {
  return (
    await axiosInstance.patch<SendProductType>(`/products/${productId}`, data)
  ).data
}

export async function deleteProduct({ productId }: ProductId) {
  return (await axiosInstance.delete(`/products/${productId}`)).data
}

export async function fetchProductsReviews({
  productId,
  order,
  cursor,
}: FetchProductsReviews) {
  return (await axiosInstance.get(`/products/${productId}/reviews`)).data
}

export async function favoriteProduct({ productId }: ProductId) {
  return (await axiosInstance.post(`/products/${productId}/favorite`)).data
}

export async function deleteFavoriteProduct({ productId }: ProductId) {
  return (await axiosInstance.delete(`/products/${productId}/favorite`)).data
}
