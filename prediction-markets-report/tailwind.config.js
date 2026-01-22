/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#f8fafc',
        card: '#ffffff',
        'card-hover': '#f1f5f9',
        accent: {
          blue: '#2563eb',
          green: '#16a34a',
          red: '#dc2626',
          yellow: '#ca8a04',
          purple: '#9333ea',
          cyan: '#0891b2',
        },
        border: {
          DEFAULT: '#e2e8f0',
          highlight: '#cbd5e1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 4px 20px rgba(37, 99, 235, 0.15)',
        'glow-green': '0 4px 20px rgba(22, 163, 74, 0.15)',
        'glow-purple': '0 4px 20px rgba(147, 51, 234, 0.15)',
        'glow-cyan': '0 4px 20px rgba(8, 145, 178, 0.15)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(37, 99, 235, 0.15)' },
          '50%': { boxShadow: '0 4px 30px rgba(37, 99, 235, 0.25)' },
        },
      },
    },
  },
  plugins: [],
}
