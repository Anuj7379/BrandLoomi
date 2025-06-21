/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        typing: "typing 2s steps(7, end) 1s forwards",
        blink: "blink 0.75s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "7ch" }, // Matches "VISION." (7 characters)
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "cyan" },
        },
      },
    },
  },
  plugins: [],
};
