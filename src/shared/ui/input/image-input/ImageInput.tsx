import Image from 'next/image'
import { ImageInputProps } from './ImageInput.type'

export default function ImageInput({
  image,
  register,
  resetField,
  ...props
}: ImageInputProps) {
  const name = register?.name

  return (
    <div className="relative w-full">
      {image && (
        <Image
          src="/images/close.svg"
          alt="close"
          width={24}
          height={24}
          className="absolute top-1.5 right-1.5 z cursor-pointer"
          onClick={resetField}
        />
      )}

      <label htmlFor={name} className="block w-full h-full cursor-pointer">
        {image && (
          <div className="relative w-full h-full">
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={URL.createObjectURL(image)}
              alt="product-image"
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}
        {!image && (
          <div className="flex items-center justify-center w-full h-full bg-gray-100">
            <Image
              src="/images/addImage.svg"
              alt="image-placeholder"
              width={24}
              height={24}
            />
          </div>
        )}
      </label>
      <input
        type="file"
        accept="image/*"
        id={name}
        className="hidden"
        {...register}
        {...props}
      />
    </div>
  )
}
