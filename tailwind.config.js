/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#fcfaf5',
          100: '#f6f0e6',
          200: '#e8dbc7',
          600: '#b6791c',
          700: '#8e5a12',
          900: '#3f2d16',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(45, 28, 8, 0.08), 0 8px 24px rgba(45, 28, 8, 0.06)',
      },
      fontFamily: {
        serifish: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'serif'],
      },
    },
  },
  plugins: [],
};
