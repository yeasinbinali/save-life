/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // './src/**/*.{html,js}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    colors: {
      main: '#cc1100'
    },
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}