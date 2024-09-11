import axiosInstance from '@app/config/axios-instance'
import type { Upload } from '@shared/types'

export async function createUpload(imageFormData: FormData) {
  return (await axiosInstance.post<Upload>(`/images/upload`, imageFormData))
    .data
}
