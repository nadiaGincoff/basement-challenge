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
