/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [ './layouts/**/*.html',],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Playfair Display', 'sans-serif'],
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        // Define your new utilities here ...
        '.slide-enter-content > *': {
          '--stagger': '0',
          '--delay': '150ms',
          '--start': '0ms',
          animation: 'slide-enter 1s both',
        },
        '.slide-enter-content > *:nth-child(1)': {
          '--stagger': '1',
        },
        // Continue defining utilities for other child elements
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}

