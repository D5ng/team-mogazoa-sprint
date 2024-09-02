/** @type {import('tailwindcss').Config} */

const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) }
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) }
const rem0_1300 = { ...Array.from(Array(1301)).map((_, i) => `${i / 10}rem`) }

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      s: '10px',
      m: '15px',
      l: '30px',
      full: '100px',
    },
    gradientColor: {
      'custom-gradient': 'linear-gradient(to right, #5097FA, #5363FF)',
    },
    extend: {
      borderWidth: rem0_10,
      borderRadius: rem0_100,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_1300,
      minHeight: rem0_1300,
      spacing: rem0_1300,
      colors: {
        blue: {
          DEFAULT: '#5097FA',
        },
        gray: {
          10: '#626282',
          20: '#9FA6B2',
        },
        indigo: '#5363FF',
        black: {
          10: '#17171C',
          20: '#21212A',
          30: '#2E2E3A',
        },
        red: '#FF0000',
        green: {
          DEFAULT: '#05D58B',
          bg: '#E7F7DB',
          naver: '#03CF5D',
        },
        purple: '#760DDE',
        orange: {
          DEFAULT: '#FFA500',
          bg: '#F9EEE3',
        },
        pink: {
          DEFAULT: '#FF2F9F',
          bg: '#F7DBF0',
        },
        violet: {
          DEFAULT: '#5534DA',
          '8%': '#F1EFFD',
          dark: '#2b1193',
        },
        white: '#F1F1F5',
        'beige-f9': '#F9F7F7',
        yellow: '#FFC83C',
      },
      screens: {
        tablet: { max: '1199px' },
        mobile: { max: '767px' },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      zIndex: {
        DEFAULT: '1',
        dropdown: '200',
        sticky: '400',
        popover: '600',
        overlay: '800',
        modal: '1000',
        toast: '1200',
      },
      boxShadow: {
        main: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        sub: '0px 4px 10px rgba(0, 0, 0, 0.25)',
      },
    },
  },
}
