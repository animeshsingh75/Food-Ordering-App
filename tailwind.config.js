/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
};
