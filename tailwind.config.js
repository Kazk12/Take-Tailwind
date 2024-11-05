/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {

      backgroundImage : {
        'bg-masthead': "url('../Take-assets/masthead.jpg')",
        'bg-lg': "url('../Take-assets/box-bg-lg.jpg')",
        'bg-box': "url('../Take-assets/box-bg.jpg')",
        'full':"url('../Take-assets/full-image.jpg')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Rokkitt: ["Rokkitt", "sans-serif"],
      },

    },
  },
  plugins: [],
}