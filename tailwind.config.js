module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        GTWalsheim: "GT-Walsheim-Pro",
      },
      colors: {
        transparent: "transparent",

        "background-dark": "rgb(17, 17, 17)",
        "background-light": "#fff",

        purple: "#7928ca",
        green: "#17c964",
        yellow: "#f5a623",
        blue: "#0070f3",
        orange: "#f15025",

        gray: "#888",
        "dark-gray": "#191919",
      },
    },
  },
  plugins: [],
};
