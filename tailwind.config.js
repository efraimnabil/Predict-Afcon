/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'forground': 'rgb(255, 255, 255)',
      'background': 'rgb(0, 0, 0)',
      'background-start-rgb': 'rgb(0, 0, 0)',
      'background-end-rgb': 'rgb(0, 0, 0)',
      },
    },
  },
  plugins: [],
}