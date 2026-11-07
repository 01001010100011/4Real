import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background canvas: deep blue quasi nero
        canvas: '#04070F',
        // Surface: pannelli glass
        surface: {
          DEFAULT: 'rgba(148, 180, 255, 0.06)',
          solid: '#0A1120',
          border: 'rgba(148, 180, 255, 0.14)',
        },
        // Primary accent: blu elettrico
        primary: {
          DEFAULT: '#3B82F6',
          bright: '#5B9CFF',
          deep: '#1D4ED8',
        },
        // Highlight accent: ciano ghiaccio
        ice: '#A5D8FF',
        // Text hierarchy
        ink: {
          DEFAULT: '#FFFFFF',
          muted: '#9FB0C9',
          dim: '#64748B',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(59, 130, 246, 0.35)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.25)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59, 130, 246, 0.18), transparent 70%)',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
