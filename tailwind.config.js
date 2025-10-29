/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#F7F2EA',
          100: '#F1E8DC',
          200: '#E7D9C4'
        },
        cocoa: {
          300: '#C5A891',
          400: '#B08C70',
          500: '#9B7357'
        },
        ink: {
          600: '#4A4A4A',
          800: '#2E2E2E'
        }
      },
      borderRadius: {
        'xl2': '1.25rem'
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0,0,0,0.04)'
      }
    },
  },
  plugins: [],
}

