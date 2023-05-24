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
      full: "9999px",
      large: "56px",
    },
    borderWidth: {
      DEFAULT: "1.5px",
      0: "0",
      1: "1.5px",
      2: "2px",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["255px", "32px"],
    },
    height: {
      md: "20vh",
      lg: "40vh",
    },
    padding: {
      "32px": "32px",
      "13px": "13px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
