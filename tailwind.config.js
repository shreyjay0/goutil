module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "prim-dark": "#0A0A0A",
        "prim-light": "#F2F2F2",
        "prim-darkh": "#0A0A0A",
        "prim-lighth": "#F2F2F2",
        "hdr-1": "rgba(54, 159, 248, 0.05)",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      fontFamily: {
        "product-sans": ["Product Sans", "sans-serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
        "lovers-quarrel": ["Lovers Quarrel", "cursive"],
      },
      animation: {
        "fbg-rot": "fbg-rot 80s linear infinite both",
      },
      keyframes: {
        "fbg-rot": {
          "0%": {
            transform: "rotate(0)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      translate: ["group-hover", "hover"],
      scale: ["group-hover", "hover"],
    },
  },
};
