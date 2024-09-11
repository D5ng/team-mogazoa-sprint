import axiosInstance from '@app/config/axios-instance'
import { CategoryListItem } from '@shared/types'

export async function fetchCategories() {
  return (await axiosInstance.get<CategoryListItem[]>(`/categories`)).data
}
