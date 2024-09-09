import Image from 'next/image'
import { close, addImage } from '@app/icons/index'
import { forwardRef, useRef, useState } from 'react'
import type { ImageInputProps } from './ImageInput.type'

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ setValue, name, onChange, ...props }, ref) => {
    const [preview, setPreview] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageClick = () => {
      fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file?.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file))
        setValue(name, file)
      }
    }

    const handleReset = () => {
      setPreview(null)
      setValue(name, null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }

    return (
      <div className={`relative w-full h-full ${props.className || ''}`}>
        <div
          onClick={handleImageClick}
          className="relative w-full h-full flex items-center justify-center cursor-pointer"
        >
          {preview ? (
            <Image
              src={preview}
              alt="업로드된 이미지"
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src={addImage}
              alt="이미지 업로드"
              width={24}
              height={24}
              priority
            />
          )}
        </div>
        {preview && (
          <button
            type="button"
            onClick={handleReset}
            className="absolute top-2 right-2 p-1 bg-black-80 opacity-50 rounded-lg"
          >
            <Image src={close} alt="이미지 제거 버튼" width={20} height={20} />
          </button>
        )}
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => {
            onChange(e)
            handleFileChange(e)
          }}
        />
      </div>
    )
  },
)

ImageInput.displayName = 'ImageInput'

export default ImageInput
