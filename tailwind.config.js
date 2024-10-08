/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: '#cc1100',
      secondary: '#ffffff',
      gradient: '#F5F5F1'
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}