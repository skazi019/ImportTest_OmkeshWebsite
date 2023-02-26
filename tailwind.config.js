/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
