import { ErrorMessageProps } from './ErrorMessage.type'

export default function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null
  return <p className="text-red text-xs">{error && error.message}</p>
}
