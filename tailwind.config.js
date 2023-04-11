/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-green-500',
    'bg-green-700',
    'bg-green-800',
    'bg-red-500',
    'bg-blue-400',
    'bg-blue-700',
    'bg-gray-200'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
