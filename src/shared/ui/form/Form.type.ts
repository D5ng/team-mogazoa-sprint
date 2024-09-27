export interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  className?: string
}
