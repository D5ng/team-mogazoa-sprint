import { UseFormSetValue, ChangeHandler } from 'react-hook-form'
import type { ProductType } from '@shared/types'

type SetValueTypes = UseFormSetValue<ProductType>

export interface TextFieldInputProps {
  placeholder: string
  setValue: SetValueTypes
  onBlur: ChangeHandler
  name: keyof ProductType
  errors: Record<string, any>
  className?: string
}
