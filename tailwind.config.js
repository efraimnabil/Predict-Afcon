/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: ['active'],
      colors: {
      'forground': 'rgb(255, 255, 255)',
      'background': '#191B21',
      'primary': '#D99E32',
      'secondary': '#D9D9D9',
      'white-30': 'rgba(255, 255, 255, 0.30)',
      'white-10': 'rgba(255, 255, 255, 0.10)',
      'black-50': 'rgba(0, 0, 0, 0.50)',
      },
    },
  },
  plugins: [],
}