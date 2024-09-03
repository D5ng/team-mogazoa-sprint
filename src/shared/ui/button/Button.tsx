import { BUTTON_VARIANT } from './Button.constants'
import type { ButtonProps } from './Button.type'

export default function Button({ disabled, ...props }: ButtonProps) {
  const defaultStyle =
    'font-semibold rounded-5 text-lg h-[65px] w-full disabled:cursor-not-allowed disabled:text-gray-10'
  const variant = BUTTON_VARIANT[props.variant]
  const style = disabled ? variant.disabled : variant.default

  return (
    <button
      disabled={disabled}
      {...props}
      className={`${defaultStyle} ${style} ${props.className || ''}`}
    >
      {props.children}
    </button>
  )
}
