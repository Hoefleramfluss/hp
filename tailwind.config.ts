import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic Dark Palette
        'deep-space': '#0a0e27',
        'space-blue': '#0f1729',
        'cyber-dark': '#030014',
        // Neon Accents
        'neon-cyan': '#00b5ff',
        'neon-pink': '#ff006e',
        'neon-purple': '#a855f7',
        'neon-blue': '#3b82f6',
        'electric-violet': '#8b5cf6',
        // Glass
        'glass-white': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'border-beam': 'borderBeam 2s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'videoPulse': 'videoPulse 16s ease-in-out infinite alternate',
        'gridPulse': 'gridPulse 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 181, 255, 0.45), 0 0 60px rgba(0, 181, 255, 0.28)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 181, 255, 0.75), 0 0 80px rgba(0, 181, 255, 0.45)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        borderBeam: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        videoPulse: {
          '0%': { opacity: '0.25', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.02)' },
          '100%': { opacity: '0.3', transform: 'scale(1.01)' },
        },
        gridPulse: {
          '0%': { opacity: '0.15' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '0.15' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 22px rgba(0, 181, 255, 0.55), 0 0 44px rgba(0, 181, 255, 0.32)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5), 0 0 40px rgba(255, 0, 110, 0.3)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
} satisfies Config
