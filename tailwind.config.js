/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        custom: {
          yelow: "hsl(47, 88%, 63%)",
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(0, 0%, 50%)",
          black: "hsl(0, 0%, 7%)",
        },
      },
      fontFamily: {
        figtree: ["Figtree", "san-serif"],
      },
      fontWeight: {
        medium: 400,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};
