import { createUpload } from '@shared/api'

export const createImageUpload = async (file: File) => {
  const formData = new FormData()
  formData.append('image', file)
  return await createUpload(formData)
}
