/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      //  Custom Fonts (Add in index.html too)
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        instink: ["'Instink'", "sans-serif"], // Optional if you plan to use custom brand font
      },

      //  Custom Animations
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        typing: "typing 2s steps(7, end) 1s forwards",
        blink: "blink 0.75s step-end infinite",
      },

      //  Custom Keyframes
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
          "100%": { width: "7ch" }, // Adjust as per text length
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "#00FFFF" }, // cyan border blink
        },
      },

      //  Custom Colors (if needed)
      colors: {
        brand: {
          dark: "#0A0F1A",
          cyan: "#00e6f6", // optional custom cyan
        },
      },

      //  Custom Blur (for glow effects)
      blur: {
        150: "150px",
      },
    },
  },

  plugins: [],
};
