module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#88594B',
          secondary: '#7C7C7C',
          info: '#4292FF',
          neutral: '#15191F',
          // danger: '#E97E27',
          // warning: '#D22875',
          // 'base-100': '#ffffff',
        },
      },
      // 'dark',
      // 'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
