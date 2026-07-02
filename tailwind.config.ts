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
        navy: '#061B4F',
        'navy-light': '#0A3588',
        'gray-technical': '#F3F6FC',
        'gray-text': '#B8C7E5',
        'gray-dark': '#071A3F',
        'safety-red': '#E32636',
        'accent-blue': '#1457E6',
        'fluid-copper': '#E32636',
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
