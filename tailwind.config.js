/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#bfd732',
        'primary-white': '#f5f6f7',
        'primary-dark': '#444444',
        'primary-gray': '#666666',
        'primary-pink': '#e61587',
        'primary-green': '#39b54a',
      },
      fontFamily: {
        base: ['Heebo', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
