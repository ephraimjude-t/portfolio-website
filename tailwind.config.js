export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],

        fontsize: {
          57: "57px",
          32: "32px",
          28: "28px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],

  // ...
};
