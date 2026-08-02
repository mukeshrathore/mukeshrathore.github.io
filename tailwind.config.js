/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fc',
          400: '#36a9f6',
          500: '#0c8ee7',
          600: '#0070c5',
          700: '#0159a0',
          800: '#064c84',
          900: '#0b416d',
          950: '#0a2a4b',
        },
        secondary: {
          50: '#fdf8f0',
          100: '#faeedd',
          200: '#f5dab8',
          300: '#efc088',
          400: '#e9a057',
          500: '#e4843a',
          600: '#d96b2e',
          700: '#b95226',
          800: '#944224',
          900: '#793821',
          950: '#441f10',
        },
        accent: {
          50: '#f5f7f9',
          100: '#eceff3',
          200: '#d8dee5',
          300: '#bbc4cf',
          400: '#97a3b4',
          500: '#78889c',
          600: '#606e82',
          700: '#4e596b',
          800: '#414a59',
          900: '#39404d',
          950: '#232932',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
