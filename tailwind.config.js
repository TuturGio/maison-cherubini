/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
