/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "new-white": "#fafafa",
        "new-black": "#3D3C40",
        "new-red": {
          100: "#FFDFD9",
          200: "#FFCAC0",
          300: "#FFB8AB",
          400: "#FFA08E",
          500: "#FF8671",
          600: "#FF6D53",
          700: "#ff5334",
          800: "#ff401e",
          900: "#ff2c06",
        },
        "new-yellow": {
          100: "#FFF1CE",
          200: "#FFE7AB",
          300: "#FFDF8E",
          400: "#FFD875",
          500: "#FFD261",
          600: "#FFCB46",
          700: "#ffc32a",
          800: "#FFBA0A",
          900: "#E8A600",
        },
        "new-blue": {
          100: "#D3D1E8",
          200: "#C0BDE3",
          300: "#BCB8ED",
          400: "#ABA5EF",
          500: "#928AE9",
          600: "#7E74ED",
          700: "#6c61e8",
          800: "#5D50EB",
          900: "#4132F0",
        },

        // don't use
        "navy-1": "#a6afc1",
        "navy-2": "#5a7194",
        "navy-3": "#233858",
        ivory: "#f1f0eb",
      },
      animation: {
        "slide-fwd-top": "slide-fwd-top 0.3s ease   both",
      },
      keyframes: {
        "slide-fwd-top": {
          "0%": {
            transform: "translateZ(0) translateY(10px)",
          },
          to: {
            transform: "translateZ(160px) translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
