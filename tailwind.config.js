/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('../assets/background.jpg')"
      }
    },
  },
  plugins: [],
}