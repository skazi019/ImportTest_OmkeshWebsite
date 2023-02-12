/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-gray': '#D7D7E1',
        'accent-red': '#FF2B00',
      },
      fontFamily: {
        header: ['DM Serif Display, serif'],
        body: ['DM Sans, sans-serif'],
      },
    },
  },
  plugins: [],
}
