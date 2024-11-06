module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#4A72FF",
        lighterblue: "#ECF5FF",
        gray: {
          DEFAULT: "#A0AEC0",
          dark: "#4A5568",
          light: "#E2E8F0",
          extralight: "#FAFAFA",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      "25px": "25px",
    },
    lineHeight: {
      32.5: "32.5px",
    },
    fontWeight: {
      700: "700",
    },
  },
  plugins: [],
};
