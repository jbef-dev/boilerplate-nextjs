const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        noise: 'url("../public/noise.svg")',
      },
      dropShadow: {
        hero: '0px -50px 50px rgba(0,0,0,0.02)',
        navbar: '0px 50px 50px rgba(0,0,0,0.08)',
      },
      colors: {
        primary: {
          main: 'hsl(286, 66%, 35%)',
          light: 'hsl(286, 66%, 38%)',
          lightest: 'hsl(286, 66%, 42%)',
          dark: 'hsl(286, 66%, 31%)',
          darkest: 'hsl(286, 66%, 26%)',
        },
        accent: {
          main: 'hsl(32, 49%, 56%)',
        },
      },
    },
  },
  plugins: [],
}
