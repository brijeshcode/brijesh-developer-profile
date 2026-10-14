/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf9f7',
        ink: '#141414',
        'ink-soft': '#3f3f46',
        muted: '#6b7280',
        hairline: '#e7e5e4',
        accent: {
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
          soft: '#eef2ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '64rem',
      },
    },
  },
  plugins: [],
}
