/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    screen: {
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '576px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        backgroundHero: "url('/img/background.png')",
        Rectangle: "url('.img/Rectangle.svg",
      },
    },
  },
  plugins: [],
};
