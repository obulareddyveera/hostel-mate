/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slabo: ['Slabo 27px', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        dancingScript: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}