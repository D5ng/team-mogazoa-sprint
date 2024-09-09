import { UseFormRegisterReturn } from 'react-hook-form'

export interface ImageInputProps extends UseFormRegisterReturn {
  setValue: (name: string, value: any) => void
  className?: string
}
