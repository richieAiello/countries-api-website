/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  corePlugins: {
    container: false,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      colors: {
        'blue-grey-light': '#2B3844',
        'blue-grey-dark': '#202C36',
        grey: '#FAFAFA',
        'black-light': '#111517',
        'glow-dark': 'rgba(0, 0, 0, 0.0562)',
        'glow-light': 'rgba(255,255,255,.25)',
      },
      boxShadow: {
        DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.0562)',
      },
    },
  },
  plugins: [],
};
