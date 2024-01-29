/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'forground': 'rgb(255, 255, 255)',
      'background': '#191B21',
      'primary': '#D99E32',
      'secondary': '#D9D9D9',
      'white-30': 'rgba(255, 255, 255, 0.30)',
      },
    },
  },
  plugins: [],
}