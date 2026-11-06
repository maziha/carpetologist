/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        ink: { DEFAULT: '#110b09', soft: '#1a1210', raised: '#241917' },
        ivory: { DEFAULT: '#f5eee2', deep: '#ebe1cf' },
        oxblood: { DEFAULT: '#6e141c', deep: '#4a0d13', bright: '#8c1d27' },
        brass: { DEFAULT: '#c19a5b', light: '#dcc08a', dark: '#8f6c34' },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
    },
  },
  plugins: [],
};
