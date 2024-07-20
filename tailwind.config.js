/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#F5F7FA',
        neutralDgray: '#4D4D4D',
        neutralPrimary: '#4CAF4F',
        neutralGrey: '#717171',
      },
    },
  },
  plugins: [],
};
