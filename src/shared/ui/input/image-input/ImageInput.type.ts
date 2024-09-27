import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import { ProductType } from '@shared/types'

type SetValueTypes = UseFormSetValue<ProductType>
export interface ImageInputProps extends UseFormRegisterReturn {
  // setValue: SetValueTypes
  className?: string
  // name: keyof ProductType
  onSuccess: () => void
}
