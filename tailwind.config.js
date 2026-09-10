/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#081a36', // Deep rich corporate navy blue from the PT SMB flyer
          secondary: '#556987',
          muted: '#8295ab',
          gray: '#f5f7fa',
          subtle: '#fafbfe',
          border: 'rgba(8, 26, 54, 0.08)',
          'border-dark': 'rgba(255, 255, 255, 0.12)',
        },
        sembada: {
          gold: '#e5a83b',
          'gold-hover': '#d4952b',
          'gold-light': '#fdf6e9',
          navy: '#081a36',
          'navy-dark': '#040d1c',
          'navy-card': '#0c244d',
          'navy-light': '#123770',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      borderRadius: {
        'apple-sm': '8px',
        'apple-md': '14px',
        'apple-card': '24px',
        'apple-card-lg': '32px',
        'apple-pill': '9999px',
      },
      boxShadow: {
        'apple-subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'apple-card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'apple-hover': '0 12px 32px rgba(0, 0, 0, 0.09)',
        'apple-glow': '0 0 24px rgba(229, 168, 59, 0.25)',
      },
      transitionTimingFunction: {
        'apple-ease': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
