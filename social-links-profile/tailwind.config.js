/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx", "*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontWeight: {
      normal: 400,
      medium: 600,
      bold: 700,
    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 20%)",
        darkGrey: "hsl(0, 0%, 12%)",
        offBlack: "hsl(0, 0%, 8%)",
        green: "hsl(75, 94%, 57%)",
      },
      screens: {
        sm: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
