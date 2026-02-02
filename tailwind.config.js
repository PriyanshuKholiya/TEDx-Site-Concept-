/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ted-red': '#e62b1e',
        'ted-dark': '#111111',
        'ted-black': '#181818',
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scroll-left 45s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'divider-move': 'divider-move 2.2s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'divider-move': {
           '0%': { left: '-30%' },
           '100%': { left: '100%' }
        }
      },
    },
  },
  plugins: [],
}