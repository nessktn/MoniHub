/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f7f9fc',
          100: '#eef3f8',
          200: '#d4e1f0',
          300: '#bacfe9',
          400: '#8baee2',
          500: '#618cda',
          600: '#4a70ce',
          700: '#3a57b3',
          800: '#1e3a8a',
          900: '#000080',
        },
      },
    },
  },
  plugins: [],
}
