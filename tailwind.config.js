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
       
      'primary': {
        '50': '#edfaff',
        '100': '#d6f2ff',
        '200': '#b6eaff',
        '300': '#85dfff',
        '400': '#4bcaff',
        '500': '#22acff',
        '600': '#0a8eff',
        '700': '#0475f1',
        '800': '#0b64d0',
        '900': '#0f5199',
        '950': '#0f325c',
    },
      },
      
    },
  },
  plugins: [],
}
