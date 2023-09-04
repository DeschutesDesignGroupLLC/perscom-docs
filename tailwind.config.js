import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindConfig from '@hempworks/pilgrim/tailwind.config'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [...tailwindConfig.content, './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{md,svg}'],
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
