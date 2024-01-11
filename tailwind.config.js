/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      screens: {
        xx: '345px',

      },
      backgroundImage: {
        'hero-pattern': "url(/src/assets/banner-img.jpg)",
      },
      colors: {
        'primary': '#6504B5',
      },
    },
  },
  plugins: [],
}

