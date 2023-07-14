/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tipografia: '#E1DEDE',
        azulClaro: '#53D8FB',
        azulEscuro: '#66C3FF',
        background: '#363732',
      },
      fontFamily: {
        fonteLogo: 'Anton',
        fontePadrao: 'Roboto',
      },
    },
  },
  plugins: [],
};
