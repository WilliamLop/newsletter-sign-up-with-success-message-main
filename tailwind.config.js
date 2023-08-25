/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'roboto-bold': ['"Roboto Bold"', 'sans-serif'],
        'roboto-regular': ['"Roboto Regular"', 'sans-serif']
      },
      colors: {
        // ### Primary
        "Tomato": "hsl(4, 100%, 67%)",
        // ### Neutral
        "DarkSlateGrey": "hsl(234, 29%, 20%)",
        "CharcoalGrey": "hsl(235, 18%, 26%)",
        "Grey": "hsl(231, 7%, 60%)",
        "White": "hsl(0, 0%, 100%)",
        "darkCapa": "hsla(0, 0%, 1%, 0.501)"
      } 
    },
  },
  plugins: [],
}

