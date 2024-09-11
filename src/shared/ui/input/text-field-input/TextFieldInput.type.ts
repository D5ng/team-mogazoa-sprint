import { UseFormSetValue } from 'react-hook-form'
import type { ProductType } from '@shared/types'

// UseFormSetValue<ProductAddType> | UseFormSetValue<ProductAddType> |
type SetValueTypes = UseFormSetValue<ProductType>

export interface TextFieldInputProps {
  placeholder: string
  setValue: SetValueTypes
  name: keyof ProductType
  className?: string
}
