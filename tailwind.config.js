/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      'basker':["Poppins", "sans-serif"],
      'abc':["Ga Maamli", 'sans-serif'],
      'witt':["Wittgenstein", "serif"]
    },
    fontWeight:{
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
    },
    fontSize:{
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
    }
  },
  plugins: [],
}
}
