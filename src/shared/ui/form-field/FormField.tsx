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
import ErrorMessage from '@shared/ui/error-message/ErrorMessage'

const FormFieldContext = createContext<FormFieldContextValue | null>(null)

	@@ -20,7 +25,7 @@ export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (props, ref) => {
    return (
      <FormFieldContext.Provider value={props}>
        <div ref={ref} className="flex flex-col gap-2.5 mobile:min-w-[335px]">
          {props.children}
        </div>
      </FormFieldContext.Provider>
	@@ -36,34 +41,47 @@ export function FieldLabel({ children }: LabelProps) {
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
          className={`h-[70px] input-base ${focusClassName} ${borderClassName}`}
        />
        <ErrorMessage error={error} />
      </div>
    )
  },
)