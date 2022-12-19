const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-primary': '#000',
        'content-primary': '#171717',
        'text-primary': '#fff',
        'decor-primary': '#2563eb'
        // 'decor-primary': '#ca8a04'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}