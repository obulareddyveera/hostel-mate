/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        slabo: ['Slabo 27px', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        dancingScript: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        signIn: `url('/images/signIn/hostelMateSignInBg.png')`
      }
    },
  },
  plugins: [require("daisyui")],
}