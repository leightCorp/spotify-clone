/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGrey: "#121212",
      },
      height: {
        footer: "9%",
      },
    },
  },
  plugins: [],
};
