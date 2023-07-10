/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    colors: {
      grey: "#f2f3f5",
      orange: "#ffca51",
      "dark-grey": "#9e9e9e",
      green: "#019c00",
      red: "#ff0626",
      black: "#181818",
    },
  },
  plugins: [],
}
