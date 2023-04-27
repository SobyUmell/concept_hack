/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinky': '#d83f87',
        'dark': '#2a1b3d',
        'non-dark': '#2a1b3d88',
        'rain': '#44318d',
        'viol': '#8265a74d',
        'cloud': '#a4b3b6',
      },
      fontFamily: {
        'brains': ['JetBrains Mono', 'monospace'],
        'comfort': ['Comfortaa']
      },
      boxShadow: {
        'base': '0px 0px 20px #d83f87',
      }
    },
  },
  plugins: [],
}