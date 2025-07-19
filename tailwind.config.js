import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        bg: "#FDF9EC",
        black: "#332C2B",
      },
      fontFamily: {
        primary: ['primary', ...defaultTheme.fontFamily.serif],
        montserrat: ['montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
