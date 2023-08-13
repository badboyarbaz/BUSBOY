/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: ['first'],
      colors: {
        white: "#fff",
        gray: {
          "100": "#808080",
          "200": "#202020",
          "300": "rgba(128, 128, 128, 0.75)",
          "400": "rgba(128, 128, 128, 0.5)",
        },
        royalblue: {
          "100": "#0578ff",
          "200": "rgba(5, 120, 255, 0.1)",
          "300": "rgba(5, 120, 255, 0.5)",
          "400": "rgba(5, 120, 255, 0.75)",
        },
        dimgray: "#606060",
        whitesmoke: "#f5f5f5",
        darkslategray: "#404040",
        aliceblue: "#e6f1ff",
        black: "#000",
        tomato: "#ff6060",
        limegreen: "#31a91d",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "10xs": "3px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      xs: "12px",
      "13xl": "32px",
      "3xs": "10px",
      "3xl": "22px",
      xl: "20px",
      lg: "18px",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    // ...
    require('tailwind-scrollbar')({ nocompatible: true }),
],
};
