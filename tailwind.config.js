/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C5A572',
          light: '#D4B896',
          dark: '#9B7E4F',
        },
        silver: '#B8B8B8',
        charcoal: {
          DEFAULT: '#1a1a1a',
          dark: '#0f0f0f',
          light: '#2a2a2a',
          lighter: '#1f1f1f',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
