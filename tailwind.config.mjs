/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lagoon:    { DEFAULT: '#1a7a6e', light: '#2a9d8f', dark: '#12584f' },
        sage:      { DEFAULT: '#6b8f5e', light: '#8aaa7c', dark: '#4e6845' },
        sand:      { DEFAULT: '#c9a96e', light: '#e0c99a', dark: '#a07840' },
        salt:      { DEFAULT: '#f4f1eb', dark: '#e8e2d5' },
        dusk:      { DEFAULT: '#2c3e50', light: '#3d5166' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Source Serif 4"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
