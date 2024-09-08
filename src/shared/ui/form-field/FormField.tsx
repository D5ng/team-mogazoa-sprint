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

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (props, ref) => {
    return (
      <FormFieldContext.Provider value={props}>
        <div ref={ref} className="flex flex-col gap-2.5">
          {props.children}
        </div>
      </FormFieldContext.Provider>
    )
  },
)

export function FieldLabel({ children }: LabelProps) {
  const { name } = useFormField()
  return (
    <label htmlFor={name} className="text-[16px] text-white">
      {children}
    </label>
  )
}
export const FieldInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { name, onChange, onBlur, errors } = useFormField()
    const error = errors[name]

    const inputStyle =
      'px-5 h-[70px] rounded-lg text-white bg-black-60 border placeholder:text-black-30 caret-white'
    const focusClassName = error
      ? ''
      : 'focus:ring-1 focus:ring-indigo focus:border-indigo'
    const borderClassName = error ? 'border-red' : 'border-black-70'

    return (
      <input
        id={name}
        name={name}
        ref={ref}
        autoComplete={name}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
        className={`${inputStyle} ${focusClassName} ${borderClassName}`}
      />
    )
  },
)

export function FieldErrorMessage() {
  const { name, errors } = useFormField()
  const error = errors[name]

  return <p className="h-1 text-red text-sm">{error && error.message}</p>
}
