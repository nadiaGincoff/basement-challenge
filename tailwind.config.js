module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "50%",
      large: "56px",
    },
    borderWidth: {
      DEFAULT: "1.5px",
      0: "0",
      1: "1px",
      2: "2px",
    },
    fontSize: {
      ssm: "0.5rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.438rem",
      "7xl": "4.2rem",
      "9xl": "15rem",
      "13xl": "16rem",
    },
    height: {
      sm: "10vh",
      md: "25vh",
      lg: "40vh",
      xl: "50vh",
      full: "100vh",
    },
    padding: {
      "7px": "7px",
      "13px": "13px",
      "15px": "15px",
      "16px": "16px",
      "21px": "21px",
      "32px": "32px",
      "18px": "18px",
    },
    screens: {
      sm: "350px",
      md: "640px",
      // => @media (min-width: 640px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
