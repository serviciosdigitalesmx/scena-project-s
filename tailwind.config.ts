import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        'navy-light': '#1A2A3A',
        'gray-technical': '#F5F6F8',
        'gray-text': '#8892A8',
        'gray-dark': '#1A2A3A',
        'safety-red': '#DC2626',
        'accent-blue': '#2D6B9E',
        'fluid-copper': '#D08A48',
      },
      fontFamily: {
        display: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-ibm-plex)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
