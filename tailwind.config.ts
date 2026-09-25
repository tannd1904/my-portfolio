import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0c',
          secondary: '#0f1012',
          tertiary: '#121316',
          hover: '#15171a',
        },
        accent: {
          cyan: '#00f0ff',
          emerald: '#10b981',
        },
        foreground: {
          DEFAULT: '#f5f5f5',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          highlight: 'rgba(0, 240, 255, 0.25)',
          emerald: 'rgba(16, 185, 129, 0.25)',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 240, 255, 0.15)',
        'emerald-glow': '0 0 25px -5px rgba(16, 185, 129, 0.15)',
      }
    },
  },
  plugins: [],
}
export default config
