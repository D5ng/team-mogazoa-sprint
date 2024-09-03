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
      <div className="flex flex-col gap-2.5">{children}</div>
    </FormFieldContext.Provider>
  )
}

export function FormLabel({ children }: LabelProps) {
  const { name } = useFormField()
  return (
    <label htmlFor={name} className="text-[16px] text-white">
      {children}
    </label>
  )
}
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { name, register, errors } = useFormField()
  const error = errors[name]
  const errorClassName = error ? 'border-red' : 'border-black-70'
  return (
    <input
      id={name}
      autoComplete={name}
      {...register(name)}
      {...props}
      className={`h-[70px] text-gray-50 rounded-lg px-5 placeholder:text-black-30 bg-black-60 border caret-white ${errorClassName}`}
    />
  )
})

export function FormErrorMessage() {
  const { name, errors } = useFormField()
  const error = errors[name]

  return (
    <p className="h-1 text-red text-sm">
      {error ? (error.message as React.ReactNode) : null}
    </p>
  )
}
