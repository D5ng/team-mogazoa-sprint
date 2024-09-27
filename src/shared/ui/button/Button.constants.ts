export const BUTTON_VARIANT = {
  primary: {
    default: 'gradient text-white hover:gradient-hover active:gradient-active',
    disabled: 'disabled:bg-none disabled:bg-black-70',
  },
  secondary: {
    default:
      'bg-gradient-to-r from-blue to-indigo bg-clip-text !text-transparent border border-indigo hover:border-indigo-hover hover:text-graidnet-hover active:border-indigo-active active:text-graidnet-active',
    disabled: 'border border-black-70',
  },
  tertiary: {
    default:
      'border border-black-20 text-black-20 hover:border-black-hover hover:text-black-hover active:border-black-active active:text-black-active',
    disabled: 'border border-black-70',
  },
} as const
