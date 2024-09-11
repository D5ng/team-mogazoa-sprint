import { axiosInstance } from '@shared/config'
import type { Upload } from '@shared/types'

export async function createUpload(imageFormData: FormData) {
  return (await axiosInstance.post<Upload>(`/images/upload`, imageFormData))
    .data
}
