import { UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form'
import { ProductAddType } from '@app/types'

type SetValueTypes = UseFormSetValue<ProductAddType>
export interface ImageInputProps extends UseFormRegisterReturn {
  setValue: SetValueTypes
  className?: string
  name: keyof ProductAddType
}
