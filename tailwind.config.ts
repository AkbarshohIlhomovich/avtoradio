import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/composables/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#231F20',
          soft: '#4A4143',
        },
        y: {
          DEFAULT: '#FFCC00',
          2: '#E6B800',
          dark: '#B89200',
          soft: '#FFF1B8',
        },
        brand: {
          DEFAULT: '#FFCC00',
          2: '#E6B800',
          dark: '#B89200',
          soft: '#FFF1B8',
        },
        cream: {
          DEFAULT: '#FAF8F2',
          2: '#FFFDF6',
        },
        line: '#EEEAE0',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        serif: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '980px',
      },
      width: {
        content: '980px',
      },
      animation: {
        pulse: 'pulse 1.8s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
