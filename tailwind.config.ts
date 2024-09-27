/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        DEFAULT: '#5097FA',
      },
      indigo: {
        DEFAULT: '#5363FF',
        hover: '#6A77FF',
        active: '#424FCC',
      },

      black: {
        10: '#F1F1F5',
        20: '#9FA6B2',
        30: '#6E6E82',
        40: '#2E2E3A',
        50: '#21212A',
        60: '#252530',
        70: '#353542',
        80: '#1C1C22',
        90: '#17171C',
        hover: '#B0B6C2',
        active: '#858B97',
      },
      white: '#F1F1F5',
      red: '#FF0000',
      green: {
        DEFAULT: '#05D58B',
      },
      purple: '#760DDE',
      orange: {
        DEFAULT: '#FFA500',
      },
      pink: {
        DEFAULT: '#FF2F9F',
      },
      transparent: 'transparent',
      yellow: '#FFC83C',
    },
    screens: {
      tablet: { max: '1280px' },
      tabletS: { max: '900px' },
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
}
