/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#faf8f3',
        'bg-alt': '#f3f0e8',
        surface: '#ffffff',
        'surface-2': '#fbfaf5',
        line: '#e6e1d4',
        'line-soft': '#efebde',

        ink: {
          DEFAULT: '#1a1a17',
          2: '#4a4a44',
          3: '#8a8678',
          4: '#b8b3a3',
        },

        amber: {
          DEFAULT: '#c2680a',
          soft: '#f5e6cc',
          deep: '#8a4a05',
        },

        good: { DEFAULT: '#4a7c59', soft: '#e6efe9' },
        warn: { DEFAULT: '#b8632a', soft: '#f5e6db' },
        alert: { DEFAULT: '#a8443d', soft: '#f5dfdc' },
        info: { DEFAULT: '#4a6b85', soft: '#e3eaef' },

        sys: {
          square: '#2a5a8a',
          tripleseat: '#b8632a',
          embed: '#5a6a8a',
          conqueror: '#6a8a4a',
          rex: '#8a5a8a',
          fund: '#8a6a4a',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '2xs': ['10px', '1.4'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.04)',
        drawer: '-12px 0 32px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
