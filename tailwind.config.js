/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui'],
        manrope: ['Manrope', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        medical: {
          primary: '#0A2540',
          accent: '#17B26A'
        },
        gastro: {
          primary: '#141414',
          accent: '#C59D5F'
        },
        werkstatt: {
          primary: '#1F2937',
          accent: '#2563EB'
        },
        events: {
          primary: '#3B1F5C',
          accent: '#A855F7'
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(168, 85, 247, 0.35)'
      }
    }
  },
  plugins: []
}
