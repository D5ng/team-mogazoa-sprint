import type { FormProps } from './Form.type'

export default function Form({ onSubmit, children, ...props }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={`${props.className || ''}`}>
      {children}
    </form>
  )
}
