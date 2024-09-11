import Image from 'next/image'
import { close, addImage } from '@shared/icons/index'
import { forwardRef, useRef, useState } from 'react'
import type { ImageInputProps } from './ImageInput.type'

const ImageInput = forwardRef<HTMLInputElement, ImageInputProps>(
  ({ setValue, name, onChange, ...props }, ref) => {
    const [preview, setPreview] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageClick = () => {
      fileInputRef.current?.click()
    }

    const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
      e,
    ) => {
      const file = e.target.files?.[0]
      if (file?.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file))
        setValue(name, file)
      }
    }

    const handleReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation()
      setPreview(null)
      setValue(name, null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }

    return (
      <div
        onClick={handleImageClick}
        className={`relative flex items-center justify-center input-base cursor-pointer w-[160px] h-[160px] tablet:w-[135px] mobile:w-[140px] ${props.className || ''}`}
      >
        {preview ? (
          <Image
            src={preview}
            alt="업로드된 이미지"
            fill
            className="object-cover w-full h-full rounded-lg"
            sizes="100%"
          />
        ) : (
          <Image src={addImage} alt="이미지 업로드" width={24} height={24} />
        )}
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
