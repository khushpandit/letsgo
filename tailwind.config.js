/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#242424',
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6',
          indigo: '#6366F1',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};