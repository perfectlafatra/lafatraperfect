import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#385EE6',
        ink: '#152238',
        accent: '#0D7D91',
        danger: '#B42332',
        canvas: '#F5F7FA'
      },
      borderRadius: {
        card: '18px'
      },
      boxShadow: {
        card: '0 18px 55px -34px rgb(21 34 56 / 0.4)'
      }
    }
  },
  plugins: []
} satisfies Config;

