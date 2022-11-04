/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        motoGrey: 'rgba(128,128,128,0.5)',
      }
    },
  },
  plugins: [],
}
