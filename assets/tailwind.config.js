const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#88c0d0",
          default: "#81a1c1",
          dark: "#5e81ac",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
