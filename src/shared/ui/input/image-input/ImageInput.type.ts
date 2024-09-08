import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface ImageInputProps extends InputHTMLAttributes<HTMLInputElement> {
  image: File | null
  register?: UseFormRegisterReturn
  resetField?: () => void
}
