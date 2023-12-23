/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#181820',
        white: '#fffcf9',
        yellow: '#ffffe3',
        blue: '#111d39',
        pink: '#edafb8',
        red: '#ff220c',
        overlay: 'rgba(0,0,0,0.5)',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        mono: ['var(--font-fraktion)'],
      }
    },
  },
  plugins: [],
}
