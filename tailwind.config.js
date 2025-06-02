/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    screens: {
        'xs': '500px',
        'sm': '770px',
        'md': '870px',
        'lg': '992px',
        'xl': '1200px',
      },
    extend: {
    },
  },
  plugins: [],
}

