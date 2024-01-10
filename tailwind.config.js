/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      titleXL: ['5rem', { lineHeight: '130%', fontWeight: 800 }],
      titleL: ['3rem', { lineHeight: '130%', fontWeight: 800 }],
      titleM: ['1.5rem', { lineHeight: '130%', fontWeight: 800 }],
      titleS: ['1.25rem', { lineHeight: '130%', fontWeight: 700 }],
      titleXS: ['1.125rem', { lineHeight: '130%', fontWeight: 700 }],
      textL: ['1.25rem', { lineHeight: '130%', fontWeight: 400 }],
      textM: ['1rem', { lineHeight: '130%', fontWeight: 400 }],
      textS: ['0.875rem', { lineHeight: '130%', fontWeight: 400 }],
      textXS: ['0.75rem', { lineHeight: '130%', fontWeight: 700 }],
      tag: ['0.625rem', { lineHeight: '130%', fontWeight: 700 }],
      buttonG: ['0.875rem', { lineHeight: '160%', fontWeight: 600 }],
      buttonM: ['0.75rem', { lineHeight: '160%', fontWeight: 400 }]
    },
    extend: {},
    screens: {
      sm: '672px',

      md: '800px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px'
    },
    colors: {
      background: '#090909',
      titleColor: '#FFFFFF',
      cardColor_green: '#BDFE68',
      buttonColor: '#222222',
      cardColor_pink: '#FFC4DD',
      fontNavBarColor: '#9E9E9E'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
