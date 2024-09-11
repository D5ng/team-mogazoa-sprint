import { axiosInstance } from '@shared/config'
import type { CategoryListItem } from '@shared/types'

export async function fetchCategories() {
  return (await axiosInstance.get<CategoryListItem[]>(`/categories`)).data
}
