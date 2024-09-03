import { createContext, useContext, forwardRef } from 'react'
import type {
  InputProps,
  LabelProps,
  FormFieldContextValue,
  FormFieldProps,
} from './FormField.type'

const FormFieldContext = createContext<FormFieldContextValue | null>(null)

export function useFormField() {
  const context = useContext(FormFieldContext)
  if (!context) {
    throw new Error('FormField 컴포넌트 내에서만 사용해야 합니다.')
  }
  return context
}
export function FormField({
  name,
  register,
  errors,
  validation,
  children,
}: FormFieldProps) {
  return (
    <FormFieldContext.Provider
      value={{
        name,
        register: (name) => register(name, validation),
        errors,
      }}
    >
      {children}
    </FormFieldContext.Provider>
  )
}

export function FormLabel({ children }: LabelProps) {
  const { name } = useFormField()
  return (
    <label htmlFor={name} className="text-base">
      {children}
    </label>
  )
}
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, register, errors } = useFormField()
  const errorClassName = errors ? 'border-red' : ''
  return <input id={name} autoComplete={name} {...register(name)} {...props} />
})

export function FormErrorMessage() {
  const { name, errors } = useFormField()
  const error = errors[name]

  if (!error) return null

  return <p>{error.message as React.ReactNode}</p>
}
