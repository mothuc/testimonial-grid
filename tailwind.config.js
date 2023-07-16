/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        bold: ['BarlowSemiCondensed-Bold'],
        base: ['BarlowSemiCondensed-Regular'],
        light: ['BarlowSemiCondensed-Light'],
      },
    },
  },
  plugins: [],
};
