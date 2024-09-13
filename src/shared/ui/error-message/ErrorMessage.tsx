import { ErrorMessageProps } from './ErrorMessage.type'

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="h-1 text-red text-xs">{error && error.message}</p>
}
