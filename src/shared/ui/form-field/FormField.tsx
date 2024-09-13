import Image from 'next/image'
import { createContext, useContext, forwardRef } from 'react'
import type {
  InputProps,
  LabelProps,
  FormFieldContextValue,
  FormFieldProps,
  EyeProps,
} from './FormField.type'
import { useToggle } from '@shared/hooks'
import { eyeOff, eyeOn } from '@shared/icons'

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
        <div ref={ref} className="flex flex-col gap-2.5 mobile:min-w-[335px]">
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

export function EyeToggle({ isToggle, onToggle }: EyeProps) {
  const icon = isToggle ? eyeOn : eyeOff
  const alt = isToggle ? '비밀번호 보기' : '비밀번호 가리기'
  return (
    <button
      className={`w-6 h-6 absolute right-5 top-[50%] -translate-y-[50%]`}
      onClick={onToggle}
      type="button"
    >
      <Image src={icon} alt={alt} />
    </button>
  )
}

export const FieldInput = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { name, onChange, onBlur, errors } = useFormField()
    const { isToggle, onToggle } = useToggle()
    const error = errors[name]
    const inputType =
      props.type === 'password' ? (isToggle ? 'text' : 'password') : props.type

    const focusClassName = error
      ? ''
      : 'focus:ring-1 focus:ring-indigo focus:border-indigo'
    const borderClassName = error ? 'border-red' : 'border-black-70'
    return (
      <div className="relative">
        <input
          id={name}
          name={name}
          ref={ref}
          autoComplete={name}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
          type={inputType}
          className={`h-[70px] input-base ${focusClassName} ${borderClassName}`}
        />
        {props.type === 'password' && (
          <EyeToggle isToggle={isToggle} onToggle={onToggle} />
        )}
      </div>
    )
  },
)

export function FieldErrorMessage() {
  const { name, errors } = useFormField()
  const error = errors[name]

  return <p className="h-1 text-red text-sm">{error && error.message}</p>
}
