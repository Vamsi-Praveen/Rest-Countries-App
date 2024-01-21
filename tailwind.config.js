/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        lightText: 'hsl(200, 15%, 8%)',
        darkGrey: 'hsl(0, 0%, 52%)',
        white: 'hsl(0, 0%, 100%)',
        white_l: 'hsl(0, 0%, 90%)'
      },
      backgroundColor: {
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(207, 26%, 17%)'
      }
    },
  },
  plugins: [],
}