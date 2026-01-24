/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF8000', // Bright orange from logo (24)
        'brand-dark-blue': '#101E2C', // Original dark blue for backgrounds
        'brand-light-blue': '#66C2C9', // Original light blue for accents
      },
    },
  },
  plugins: [],
}

