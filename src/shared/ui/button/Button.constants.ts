export const BUTTON_VARIANT = {
  primary: {
    default: 'gradient text-white',
    disabled: 'disabled:bg-none disabled:bg-black-70',
  },
  secondary: {
    default:
      'bg-gradient-to-r from-blue to-indigo bg-clip-text text-transparent border border-indigo',
    disabled: 'border border-black-70',
  },
  tertiary: {
    default: 'border border-black-20 text-black-20',
    disabled: 'border border-black-70',
  },
} as const
