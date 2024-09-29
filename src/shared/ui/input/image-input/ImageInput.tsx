import Image from 'next/image'
import { Loading } from '@shared/ui'
import { close, addImage } from '@shared/icons'
import { useImageUpload } from '@shared/hooks'
import { twMerge } from 'tailwind-merge'

interface ImageInputProps {
  onCancel: (imageIndex: number) => void
  onSuccess: (file: File, index: number) => Promise<void>
  onFailed?: () => void
  className?: string
  imageIndex?: number
  previewImage?: string
  isUpdated?: boolean
}

export default function ImageInput({
  onSuccess,
  className,
  onCancel,
  imageIndex = 0,
  previewImage,
  isUpdated,
}: ImageInputProps) {
  const { ref, preview, isLoading, onChange, onClick, onReset } =
    useImageUpload({ onSuccess, onCancel, imageIndex, previewImage })

  return (
    <div
      onClick={onClick}
      className={twMerge(
        `relative flex items-center justify-center input-base cursor-pointer w-[160px] h-[160px] tablet:w-[135px] mobile:w-[140px]`,
        className || '',
      )}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Image src={addImage} alt="이미지 업로드" width={24} height={24} />
      )}

      {!isLoading && preview && (
        <>
          <Image
            src={preview}
            alt="업로드된 이미지"
            fill
            className="object-cover w-full h-full rounded-lg"
            sizes="100%"
          />
          {isUpdated && (
            <button
              type="button"
              onClick={onReset}
              className="absolute top-2 right-2 p-1 bg-black-80 opacity-50 rounded-lg"
            >
              <Image
                src={close}
                alt="이미지 제거 버튼"
                width={20}
                height={20}
              />
            </button>
          )}
        </>
      )}
      <input type="file" className="hidden" ref={ref} onChange={onChange} />
    </div>
  )
}
