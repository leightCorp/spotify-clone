/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGrey: "#121212",
        footer_start: "#AF2896",
        footer_end: "#509BF5",
      },
      height: {
        footer: "9%",
      },
    },
  },
  plugins: [],
};
