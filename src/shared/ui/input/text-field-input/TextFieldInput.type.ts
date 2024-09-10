import { ProductAddType } from '@app/types'
import { UseFormSetValue } from 'react-hook-form'

// UseFormSetValue<ProductAddType> | UseFormSetValue<ProductAddType> |
type SetValueTypes = UseFormSetValue<ProductAddType>

export interface TextFieldInputProps {
  placeholder: string
  setValue: SetValueTypes
  name: keyof ProductAddType
  className?: string
}
