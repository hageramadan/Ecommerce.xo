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
  },
};
