/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'header': ['DM Serif Display, serif'],
        'body': ['DM Sans, sans-serif'],
      },
    },
  },
  plugins: [],
}
