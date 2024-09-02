import { BUTTON_STYLES } from './Button.constants'
import type { ButtonProps } from './Button.type'

export default function Button({ disabled, ...props }: ButtonProps) {
  const defaultStyle =
    'font-semibold rounded-5 text-lg h-[65px] w-full disabled:cursor-not-allowed disabled:text-gray-10'
  const design = BUTTON_STYLES[props.design]
  const style = disabled ? design.disabled : design.default

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
