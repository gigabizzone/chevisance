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
        primary: '#1E4B5A',
        accent: '#2DA5B4',
        'bg-light': '#EBF4F6',
        'text-dark': '#1A2B30',
        border: '#CBD8DC',
        orange: '#E8663D',
      },
      fontFamily: {
        heading: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
      borderRadius: {
        btn: '30px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(30, 75, 90, 0.12)',
        'card-hover': '0 12px 32px rgba(30, 75, 90, 0.22)',
      },
      maxWidth: {
        site: '1280px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}

export default config
