import type {
  SubmitHandler,
  UseFormHandleSubmit,
  FieldValues,
} from 'react-hook-form'
interface FormProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  children: React.ReactNode
  setError?: any
  apiRequest?: any
  className?: string
}

export default function Form({
  apiRequest,
  handleSubmit,
  setError,
  children,
  ...props
}: FormProps) {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await apiRequest(data, setError)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${props.className || ''}`}
    >
      {children}
    </form>
  )
}
