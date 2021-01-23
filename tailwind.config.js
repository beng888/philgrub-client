// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      first: "#B6A19E",
      second: "#015249",
      third: "#A37B3B",
      fourth: "#C38d9E",
      fifth: "#3BBA9C",
      sixth: "#707793",
      seventh: "#6C648B",
      eight: "#654321",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#015249",
      secondary: "#654321",
      tertiary: "#A37B3B",
      quaternary: "#C38d9E",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: "#015249",
      secondary: "#654321",
      tertiary: "#A37B3B",
      quaternary: "#C38d9E",
    }),
    extend: {
      letterSpacing: {
        widest: ".15em",
      },
      boxShadow: {
        black: "0 4px 14px 0 rgba(0,0,0,0.7)",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
      },
      fontFamily: {
        sans: ["Poppins", "Sans-serif"],
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      height: {
        dscreen: "200vh",
        fit: "fit-content",
        560: "560px",
        450: "450px",
      },
      minHeight: {
        "1-1/4": "125vh",
      },
      width: {
        ".25Wscreen": "25vw",
        dhscreen: "150vw",
        dscreen: "200vw",
        screenheight: "100vh",
        fit: "fit-content",
      },
      maxWidth: {
        "14-rem": "14rem",
      },
      rotate: {
        270: "270deg",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      screens: {
        portrait: "360px",
      },
      margin: {
        "^hscreen": "100vh",
        "^1.25hscreen": "125vh",
        "^1.5hscreen": "150vh",
        "^1.75hscreen": "175vh",
        "^2hscreen": "200vh",
        "^2.25hscreen": "225vh",
        "^3hscreen": "300vh",
        "^3.25hscreen": "325vh",
        "^6hscreen": "600vh",
      },
      textShadow: {
        black: "1px 1px 5px rgba(0,0,0,0.7)",
        "black-solid": "0px 0px 5px rgba(0,0,0,1)",
      },
      transitionDelay: {
        1200: "1200ms",
        1500: "1500ms",
        1700: "1700ms",
        2000: "2000ms",
      },
    },
  },
  variants: {
    animation: ["group-hover"],
    scale: ["group-hover", "hover", "group-focus", "focus-within"],
    translate: ["group-hover", "responsive"],

    extend: {
      backgroundColor: ["group-focus", "odd"],
      translate: ["group-focus"],
      textColor: ["group-focus"],
      position: ["group-focus", "focus-within"],
      opacity: ["group-focus"],
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
