/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        l: {
          text: '#4d4d4d',
          bg: '#ffffff',
          keyText: '#ffffff',
        },
        d: {
          text: '#9ca3af',
          bg: '#4d4d4d',
          keyText: '#4d4d4d',
        },
        key1: '#e58b88',
        key2: '#9dabdd',
        key3: '#70ae98',
        key4: '#ecbe7a',
      },
    },
  },
  plugins: [],
}
