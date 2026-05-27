/** @type {import('tailwindcss').Config} */

export default {

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      colors: {

        primary: "#14532d",

        secondary: "#1f8b45",

        lightbg: "#eef2ef",
      },

      fontFamily: {

        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {

        premium:
          "0 10px 40px rgba(0,0,0,0.08)",

        soft:
          "0 6px 20px rgba(0,0,0,0.05)",
      },

      borderRadius: {

        xl2: "24px",

        xl3: "30px",
      },

      animation: {

        float: "float 4s ease-in-out infinite",

        pulseSlow:
          "pulseSlow 2.5s infinite",
      },

      keyframes: {

        float: {

          "0%, 100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-8px)",
          },
        },

        pulseSlow: {

          "0%": {
            opacity: 0.6,
          },

          "50%": {
            opacity: 1,
          },

          "100%": {
            opacity: 0.6,
          },
        },
      },
    },
  },

  plugins: [],
};