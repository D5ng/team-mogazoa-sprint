import { useRef, useState } from 'react'

interface UseImageUpload {
  onSuccess: (file: File, index: number) => Promise<void>
  onCancel: (imageIndex: number) => void
  onFailed?: () => void
  imageIndex: number
  previewImage?: string
}

export default function useImageUpload({
  onSuccess,
  onCancel,
  imageIndex,
  previewImage,
}: UseImageUpload) {
  const [preview, setPreview] = useState(previewImage || '')
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageClick = () => fileInputRef.current?.click()

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    const file = event.target.files?.[0]
    if (!file?.type.startsWith('image/')) return
    setIsLoading(true)
    setPreview(URL.createObjectURL(file))
    try {
      await onSuccess(file, imageIndex)
    } catch (error) {
      //
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    setPreview('')
    onCancel(imageIndex)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return {
    ref: fileInputRef,
    preview,
    isLoading,
    onClick: handleImageClick,
    onChange: handleFileChange,
    onReset: handleReset,
  }
}