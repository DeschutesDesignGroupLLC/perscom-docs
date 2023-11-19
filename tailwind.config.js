import defaultTheme from 'tailwindcss/defaultTheme'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{md,svg}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        500: '#2563eb'
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
