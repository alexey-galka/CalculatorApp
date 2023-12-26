/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/*.{html,ts}",
    "./src/app/calculator/calculator-buttons/*.{html, ts}",
    "./src/app/calculator/calculator-display/*.{html, ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

