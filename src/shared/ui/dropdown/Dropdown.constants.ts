export const DROPDOWN_VARIANT = {
  border: {
    wrapper: 'relative w-[400px]',
    button:
      'w-full h-[70px] border border-black-70 bg-black-60 rounded-lg px-[20px] flex justify-between items-center text-black-30 focus:text-white focus:border-indigo',
  },
  none: {
    wrapper: 'relative w-[200px]',
    button:
      'w-full rounded-lg px-[20px] flex justify-between items-center text-black-30',
  },
} as const
