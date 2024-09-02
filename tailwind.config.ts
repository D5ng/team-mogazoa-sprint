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
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transform: {
        '85': 'scale(0.85)',
      },
      animation: {
        bounceOnce: 'bounceOnce 3s ease-in-out infinite',
      },

      borderWidth: rem0_10,
      borderRadius: rem0_100,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_1300,
      minHeight: rem0_1300,
      spacing: rem0_1300,
      colors: {
        blue: {
          DEFAULT: '#0094FF',
        },
        gray: {
          10: '#F7F7F8',
          20: '#F1F1F1',
          30: '#DCDCDC',
          40: '#C1C1C1',
          50: '#99999A',
          60: '#818181',
          70: '#5A5A5B',
          80: '#3D3D3D',
        },
        black: {
          DEFAULT: '#000',
          overlay: 'rgba(0, 0, 0, 0.70)', // 모달창 뒷 배경
        },
        red: '#F23B3B',
        green: {
          DEFAULT: '#34C231',
          bg: '#E7F7DB',
          naver: '#03CF5D',
        },
        purple: '#760DDE',
        orange: {
          DEFAULT: '#FFA500',
          bg: '#F9EEE3',
        },
        pink: {
          DEFAULT: '#D549B6',
          bg: '#F7DBF0',
        },
        violet: {
          DEFAULT: '#5534DA',
          '8%': '#F1EFFD',
          dark: '#2b1193',
        },
        white: '#FFF',
        'beige-f9': '#F9F7F7',
        yellow: '#FEE500',
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
