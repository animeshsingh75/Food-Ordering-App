/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1150px" },
      xl: { max: "950px" },

      lg: { max: "880px" },
      md: { max: "650px" },

      mds: { max: "610px" },
      sm: { max: "484px" },

      xs: { max: "350px" },
      "2xs": { max: "320px" },
    },
    extend: {
      colors: {
        "header-bg": "#ffffff",
        "footer-bg": "#ffffff",
        "body-bg": "#e3e3e3",
        "input-bg": "#f2f2f2",
        "input-bg-focus": "#dbdbdb",
        "text-color": "#000000",
        "light-text-color": "#545454",
        "light-text-title": "#353535",
        "light-green": "#00ad1d",
        "dark-green": "#016034",
        orange: "#d97919",
        "light-orange": "#ffaf60",
        "dark-orange": "#c26100",
        "x-dark-orange": "#9D2A01",
        "light-red": "#EC3838",
        white: "#fff",
        "light-white-text": "#eaeaea",
        "light-black": "#171717",
        "light-blue": "#0463ac",
        "dark-blue": "#070062",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s infinite",
      },
      backgroundImage: {
        "gradient-shimmer":
          "linear-gradient(to right, #e6e6e6 5%, #cccccc 25%, #e6e6e6 35%)",
      },
      backgroundSize: {
        "1000px": "1000px 100%",
      },
    },
  },
  plugins: [],
};
