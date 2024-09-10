import { twMerge } from 'tailwind-merge'
import Loading from '../loading/Loading'
import { BUTTON_VARIANT } from './Button.constants'
import type { ButtonProps } from './Button.type'

export default function Button({ disabled, isLoading, ...props }: ButtonProps) {
  const commonStyle =
    'relative font-semibold rounded-lg text-lg h-[65px] w-full disabled:cursor-not-allowed disabled:text-black-30 tablet:h-[55px] tablet:text-base mobile:h-[50px]'
  const variant = BUTTON_VARIANT[props.variant]
  const defaultStyle = disabled ? variant.disabled : variant.default

  return (
    <button
      disabled={disabled}
      {...props}
      className={twMerge(commonStyle, defaultStyle, props.className || '')}
    >
      {isLoading ? <Loading /> : props.children}
    </button>
  )
}
