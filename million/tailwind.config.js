/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#4d4d4d',
        key1: '#e58b88',
        key2: '#9dabdd',
        key3: '#70ae98',
        key4: '#ecbe7a',
      },
    },
  },
  plugins: [],
}
