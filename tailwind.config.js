/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': {'min': '400px'},
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

