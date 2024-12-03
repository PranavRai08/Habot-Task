/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': 'rgba(7, 47, 87, 0.75)',
        'custom-light-blue': 'rgba(7, 47, 87, 0)',
        'custom-overlay': 'rgba(7, 47, 87, 0.45)',
      },
      backgroundImage: {
        'custom-gradient': `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), 
                            linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45))`,
      },
    },
  },
  plugins: [],
};




