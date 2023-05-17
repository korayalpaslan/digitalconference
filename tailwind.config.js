/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1c61f8',
        background: '#1c2128',
        primary_dark: '#07376c',
        border: '#374456',

      },
    },
    fontFamily:{
      sans:['Manrope', 'sans-serif'],
    },
  },
  plugins: [],
}
