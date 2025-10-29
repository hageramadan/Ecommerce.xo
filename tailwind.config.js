/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       colors: {
        'pro': '#ff7300',      
        'pro-hover': '#ffa655',
      },
      },
      
    },
     keyframes: {
    fadeInDown: {
      "0%": { opacity: "0", transform: "translateY(-10px)" },
      "100%": { opacity: "1", transform: "translateY(0)" },
    },
  },
  animation: {
    fadeInDown: "fadeInDown 0.3s ease-out",
  },
  },
};
