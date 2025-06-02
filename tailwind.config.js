/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      screens: {
        'xs': '500px',
        'sm': '770px',
        'md': '850px',
        'lg': '992px',
        'xl': '1200px',
        // '2xl':'1280',
      },
    },
  },
  plugins: [],
}

