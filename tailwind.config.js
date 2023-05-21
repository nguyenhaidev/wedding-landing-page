/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "pinyon": ['Pinyon Script', 'cursive'],
      "playfair": ['Playfair Display', 'serif'],
      "cormorant": ['Cormorant Garamond', 'serif'],
      "raleway": ['Raleway', 'sans-serif'],
      "mont": ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}