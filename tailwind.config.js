/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'border-spin': 'border-spin 2.5s linear infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        'border-spin': {
          'to': { '--gradient-angle': '360deg' }
        },
        'shimmer': {
          'to': { transform: 'translate(-50%, -50%) rotate(360deg)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}