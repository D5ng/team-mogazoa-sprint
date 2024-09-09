interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  className?: string
}

export default function Form({ onSubmit, children, ...props }: FormProps) {
  return (
    <form onSubmit={onSubmit} className={`${props.className || ''}`}>
      {children}
    </form>
  )
}
