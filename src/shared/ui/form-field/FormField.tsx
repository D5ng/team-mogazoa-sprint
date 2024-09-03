// import { createContext, useContext, forwardRef } from 'react'
// import { FieldValues } from 'react-hook-form'
// import type {
//   FormFieldContextType,
//   FormFieldProps,
//   LabelProps,
// } from './FormField.type'

// const FormFieldContext = createContext<FormFieldContextType<any> | null>(null)

// function useFormField() {
//   const context = useContext(FormFieldContext)
//   if (!context) {
//     throw new Error('FormField 컴포넌트 내에서만 사용해야 합니다.')
//   }
//   return context
// }

// export function FormField<TFieldValues extends FieldValues>({
//   name,
//   register,
//   errors,
//   children,
// }: FormFieldProps<TFieldValues>) {
//   // const error = errors[name]?.message as string | undefined
//   return (
//     <FormFieldContext.Provider value={{ name, register }}>
//       {children}
//     </FormFieldContext.Provider>
//   )
// }

// export function Label({ children }: LabelProps) {
//   const { name } = useFormField()
//   return <label htmlFor={name}>{children}</label>
// }

// // export function Input<TFieldValues extends FieldValues>({
// //   ...props
// // }: InputHTMLAttributes<HTMLInputElement> &
// //   ReturnType<UseFormRegister<TFieldValues>>) {
// //   const { name, register } = useFormField()
// //   return <input id={name} {...register(name)} {...props} />
// // }

// const Input = forwardRef<HTMLInputElement>(function Input(props, ref) {
//   return <input ref={ref} {...props} />
// })

// export function ErrorMessage() {
//   const { error } = useFormField()
//   if (!error) return null
//   return <p>{error}</p>
// }

// FormField.Label = Label
// FormField.Input = Input
// FormField.ErrorMessage = ErrorMessage
